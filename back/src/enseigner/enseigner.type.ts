import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Matiere } from '../matiere/matiere.entity';
import { EnseignerTable } from '../matiere/matiere.type';

@InputType()
export class SetEnseignerInput {
  @Field()
  matiereId: number;

  @Field()
  classeId: number;

  @Field()
  sectionId: number;

  @Field(() => [Number])
  professeurs: number[];
}

@ObjectType()
export class SetEnseignerResult {
  @Field()
  matiere: Matiere;

  @Field(() => [EnseignerTable])
  enseignerTable: EnseignerTable[];
}
