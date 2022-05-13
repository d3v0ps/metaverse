import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ThrottlerModule } from '@nestjs/throttler';
import GraphQLJSON from 'graphql-type-json';
import { join } from 'path';
import { AppController } from './app.controller';
import { ApplicationResolver } from './app.resolver';
import { AppService } from './app.service';
import { DocumentsModule } from './documents/documents.module';
import { DomainModule } from './domain/domain.module';
import { ExchangeRatesModule } from './finances/exchange-rates.module';
import { AppThrottlerGuard } from './guards/gql-throttler.guard';
import { PackagesModule } from './packages/packages.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: __dirname,
      renderPath: '/assets',
    }),
    ConfigModule.forRoot(),
    CacheModule.register(),
    ThrottlerModule.forRoot({
      ttl: process.env.NODE_ENV === 'development' ? 99999 : 60,
      limit: process.env.NODE_ENV === 'development' ? 9999 : 10,
    }),
    ScheduleModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: { JSON: GraphQLJSON },
      autoSchemaFile: join(process.cwd(), 'apps/host/static/schema.gql'),
    }),
    PackagesModule,
    DocumentsModule,
    DomainModule,
    ExchangeRatesModule,
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: 'packages',
            module: PackagesModule,
          },
          {
            path: 'documents',
            module: DocumentsModule,
          },
          {
            path: 'exchange-rates',
            module: ExchangeRatesModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ApplicationResolver,
    // ClockTask,
    {
      provide: APP_GUARD,
      useClass: AppThrottlerGuard,
    },
  ],
})
export class AppModule {}
