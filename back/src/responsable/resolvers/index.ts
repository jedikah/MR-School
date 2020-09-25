import { CreateResponsableResolver } from './create-responsable.resolver';
import { ResponsablesResolver } from './responsables.resolver';
import { UpdateResponsableResolver } from './update-responsable.resolver';

export const responsableResolvers = [
  CreateResponsableResolver,
  ResponsablesResolver,
  UpdateResponsableResolver,
];
