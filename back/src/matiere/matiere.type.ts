import { createUnionType, ObjectType, Field, InputType } from '@nestjs/graphql';

import { Matiere } from './matiere.entity';

// create matiere

@ObjectType()
export class CreateMatiereError {
  @Field()
  designationAlreadyExist: string;
}

export const CreateMatiereResult = createUnionType({
  name: 'CreateMatiereResult',
  types: () => [CreateMatiereError, Matiere],
  resolveType: (value: CreateMatiereError | Matiere) => {
    if (value instanceof CreateMatiereError) return 'CreateMatiereError';
    if (value instanceof Matiere) return 'Matiere';
    return null;
  },
});

// fin create matiere

// update matiere

@InputType()
export class UpdateMatiereInput implements Partial<Matiere> {
  @Field()
  id: number;

  @Field()
  designation: string;
}

// fin update matiere
