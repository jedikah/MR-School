import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { IPaginationMeta, IPaginationOptions } from 'nestjs-typeorm-paginate';

@ObjectType()
export class PaginationMeta implements IPaginationMeta {
  @Field()
  itemCount: number;

  @Field()
  itemsPerPage: number;

  @Field()
  totalItems: number;

  @Field()
  totalPages: number;

  @Field()
  currentPage: number;
}

@InputType()
export class PaginationInput implements IPaginationOptions {
  @Field()
  page: number;

  @Field()
  limit: number;
}
