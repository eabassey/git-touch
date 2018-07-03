import { Module } from '@nestjs/common';
import { AuthorsService } from './author.service';
import { AuthorResolver } from './author.resolver';

@Module({
  imports: [],
  providers: [AuthorsService, AuthorResolver],
})
export class AuthorsModule {}
