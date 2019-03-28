import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Hello')
export class HelloResolver {
    constructor() { }

    @Query(returns => String)
    async Hello() {
        throw new Error("Ups")
    }
}
