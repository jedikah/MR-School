import { Responsable } from './responsable.entity';
import { Utilisateur } from '../utilisateur/utilisateur.entity';

export const ResponsableSeed = (utilisateurs: Utilisateur[]): Responsable[] => {
  return utilisateurs.map(u => {
    const responsable = new Responsable();
    responsable.utilisateur = u;
    return responsable;
  });
};
