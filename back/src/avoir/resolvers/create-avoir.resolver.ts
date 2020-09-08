import { Resolver, Mutation } from '@nestjs/graphql';
import { AvoirService } from '../avoir.service';

@Resolver()
export class CreateAvoirResolver {
  constructor(private avoirServise: AvoirService) {}
}
