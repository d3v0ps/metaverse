import {
  Args,
  Field,
  ID,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';
import { PackagesService } from './packages.service';

@ObjectType()
export class Package {
  @Field()
  name: string;

  @Field()
  path: string;
}

@Resolver((of) => Package)
export class PackagesResolver {
  constructor(private readonly service: PackagesService) {}

  @Mutation((returns) => ID)
  async generate(
    @Args({
      name: 'packageNames',
      type: () => [String],
    })
    packageNames: string[]
  ) {
    const id = uuid();
    this.service.generatePackages(packageNames).subscribe();
    return id;
  }
}
