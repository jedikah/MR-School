import { HttpException, HttpStatus } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Parent } from '../parent.entity';
import { ParentService } from '../parent.service';
import { CreateParentInput, ParentInput } from '../parent.type';

@Resolver()
export class CreateParentResolver {
  constructor(private parentService: ParentService) {}

  @Mutation(() => Parent)
  async createParent(@Args('input') input: CreateParentInput): Promise<Parent> {
    let parent = await this.parentService.ParentByContact(input.contact);

    if (!parent) {
      Object.assign<Parent, ParentInput>(parent, input);

      parent = await this.parentService.createParent(parent);
    } else
      throw new HttpException(
        `Ces parent sont déja inscrit dans la base de données.`,
        HttpStatus.UNAUTHORIZED,
      );

    return parent;
  }
}
