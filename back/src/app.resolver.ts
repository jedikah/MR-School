import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  async helloMrSchool(): Promise<string> {
    return 'hello mr school api';
  }
}
