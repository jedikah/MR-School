import { CreateMatiereResolver } from './createMatiere';
import { MatieresResolver } from './matieres';
import { UpdateMatiereResolver } from './updateMatiere';
import { RemoveMatiereResolver } from './removeMatiere';

export const MatiereResolvers = [
  CreateMatiereResolver,
  MatieresResolver,
  UpdateMatiereResolver,
  RemoveMatiereResolver,
];
