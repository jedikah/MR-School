import { CreateResponsableResolver } from './create-responsable.resolver';
import { ResponsableFieldResolver } from '../resolver-fields/responsable.field-resolver';

export const responsableResolvers = [
  CreateResponsableResolver,
  ResponsableFieldResolver,
];
