import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { CoefficientTable } from '../matiere/matiere.type';

// set coefficients

@InputType()
export class IdCoefficient {
  @Field()
  idMatiere: number;

  @Field(() => [Number])
  idClasses: number[];
}

@ObjectType()
export class SetCoefficientsResult {
  @Field()
  matiereId: number;

  @Field(() => [CoefficientTable])
  coefficientTable: CoefficientTable[];
}

// fin set coefficients
