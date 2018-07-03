import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, App2Service } from './app.service';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { AuthorsModule } from './authors/authors.module';

// more new text

@Module({
  imports: [GraphQLModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private readonly graphQLFactory: GraphQLFactory) {}

  configure(consumer: MiddlewareConsumer) {
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
    const schema = this.graphQLFactory.createSchema({ typeDefs });
    consumer
      .apply(graphiqlExpress({ endpointURL: '/graphql' }))
      .forRoutes('/graphiql')
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes('/graphql');
  }
}
