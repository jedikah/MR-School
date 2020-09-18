import { Utilisateur, EleveInput, Parent } from '../../../../graphql/types';

export interface CreateData {
  photo?: string | null;
  matricule: string;
  nom: string;
  prenom: string;
  utilisateur: Utilisateur[];
  eleve: EleveInput[];
  parent: Parent[];
}

function createData(
  photo: string | null,
  matricule: string,
  nom: string,
  prenom: string,
  utilisateur: Utilisateur,
  eleve: EleveInput,
  parent: Parent
): CreateData {
  return {
    photo,
    matricule,
    nom,
    prenom,
    utilisateur: [utilisateur],
    eleve: [eleve],
    parent: [parent]
  };
}

export function generateDataTable(row: number) {
  let array = [],
    i = 0;

  for (i = 0; i < row; i++) {
    array.push(i);
  }

  return array.map((val) => {
    const num = val + 1;
    return createData(
      'photo ' + num,
      'matricule ' + num,
      'nom ' + num,
      'prenom ' + num,
      {
        id: 'id ' + num,
        adresse: 'adresse ' + num,
        contact: 'contact ' + num,
        motDePasse: 'motDePasse ' + num,
        nom: 'nom ' + num,
        photo: 'photo ' + num,
        prenom: 'prenom ' + num
      },
      {
        matricule: 'matricule ' + val,
        naissance: 'naissance ' + val,
        sexe: 'sexe ' + val
      },
      {
        id: 'id ' + num,
        pere: 'pere' + num,
        mere: 'mere' + num,
        tuteur: 'tuteur' + num,
        contact: 'contact' + num,
        adresse: 'adresse ' + num
      }
    );
  });
}
