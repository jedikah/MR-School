import { CreateEleveResolver } from './create-eleve.resolver';
import { UpdateleveResolver } from './update-eleve.resolver';
import { ElevesResolver } from './eleves.resolver';
import { OneEleveResolver } from './eleve.resolver';

export const eleveResolvers = [
  CreateEleveResolver,
  UpdateleveResolver,
  ElevesResolver,
  OneEleveResolver,
];
