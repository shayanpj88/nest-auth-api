// import { Resolver } from '@nestjs/graphql';

// @Resolver()
// export class HelloResolver {}

import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello from GraphQL!';
  }
}
