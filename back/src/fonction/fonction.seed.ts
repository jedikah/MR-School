import { Fonction } from './fonction.entity';

const professeur = new Fonction();
professeur.designation = 'professeur';

const admin = new Fonction();
admin.designation = 'admin';

export const FonctionSeed: Fonction[] = [professeur, admin];
