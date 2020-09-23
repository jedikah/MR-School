import { Utilisateur } from './utilisateur.entity';
import { NB_ROW } from '../configs/seed';

export const UtilisateurSeed: Utilisateur[] = Array.from(Array(NB_ROW)).map(
  (_, i) => {
    const utilisateur = new Utilisateur();
    Object.assign<Utilisateur, Partial<Utilisateur>>(utilisateur, {
      nom: `u${i}_nom`,
      prenom: `u${i}_prenom`,
      contact: `u${i}_contact`,
      adresse: `u${i}_adresse`,
      motDePasse: `u${i}_motDePasse`,
    });
    return utilisateur;
  },
);
