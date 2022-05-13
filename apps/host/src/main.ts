/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// import { ValueProvider } from '@angular/core';
import { ValueProvider } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/entity-manager';
import { ENTITY_MANAGER_HOST_DEFAULT_PROVIDER } from '@central-factory/persistence/providers/database/host.provider';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import * as express from 'express';
import helmet from 'helmet';
import { lastValueFrom } from 'rxjs';
import { AppModule } from './app/app.module';
import { collectionsProviders } from './app/providers/data/collections.providers';
import { demoDataProviders } from './app/providers/data/demo-data.providers';
import { initialDataProviders } from './app/providers/data/initial-data.providers';

const logger = new Logger('Bootstrap');

async function setupDb() {
  const entityManager = new EntityManager(
    (collectionsProviders as ValueProvider[]).map((p) => p.useValue),
    (initialDataProviders as ValueProvider[])
      .concat(demoDataProviders as ValueProvider[])
      .map((p) => p.useValue),
    ENTITY_MANAGER_HOST_DEFAULT_PROVIDER.useValue
  );

  try {
    await lastValueFrom(
      entityManager.setupDatabase(
        process.env.DATABASE_NAME || 'test',
        process.env.DATABASE_PASSWORD || 'test1234',
        true
      )
    );
  } catch (err) {
    console.error(err);
    return entityManager;
  }

  return entityManager;
}

const globalPrefix = 'api';

async function configure(app: INestApplication) {
  const { app: dbApp } = await setupDb();
  app.use('/db', dbApp);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Metaverse Host')
    .setDescription('The Host API description')
    .setVersion('1.0')
    .addTag('workspace')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);

  return app;
}

async function initialize(app: INestApplication) {
  const port = process.env.PORT || 3333;

  await app.init();

  // const { schema } = app.get(GraphQLSchemaHost);
  // const httpAdapter = app.getHttpAdapter();

  // const subscriptionServer = SubscriptionServer.create({
  //   schema,
  //   app: httpAdapter.getInstance(),
  // });

  // process.on('beforeExit', () => {
  //   subscriptionServer.close();
  // });

  await app.listen(port);
  logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  return app;
}

async function bootstrap() {
  const steps = [
    (app) => NestFactory.create(AppModule, new ExpressAdapter(app)),
    configure,
    initialize,
  ];

  return steps.reduce(
    (prev, cur) => prev.then((app) => cur(app)),
    Promise.resolve(express())
  );
}

bootstrap();
