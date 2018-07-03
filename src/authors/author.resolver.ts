import {
  Resolver,
  Query,
  ResolveProperty,
  Mutation,
  Subscription,
} from '@nestjs/graphql';
import { AuthorsService } from './author.service';
import { PubSub } from 'graphql-subscriptions';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authorsService: AuthorsService, // private pubSub: PubSub,
  ) {}

  @Query('author')
  getAuthor(obj, args, context, info) {
    const { id } = args;
    return this.authorsService.findOneById(id);
  }

  //   @Mutation()
  //   upvotePost() {
  //     return [];
  //   }

  @ResolveProperty('posts')
  getPosts(obj, args, context, info) {
    const { id } = obj;
    return this.authorsService.findAllPosts({ authorId: id });
  }

  //   @Subscription()
  //   commentAdded() {
  //     return {
  //       subscribe: () => this.pubSub.asyncIterator('commentAdded'),
  //     };
  //   }
}
