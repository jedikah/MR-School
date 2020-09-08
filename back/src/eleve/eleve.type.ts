import { InputType, Field } from '@nestjs/graphql';
import { Eleve } from './eleve.entity';
import { UtilisateurInput } from '../utilisateur/utilisateur.type';

@InputType()
export class EleveInput implements Partial<Omit<Eleve, 'utilisateur'>> {
  @Field()
  utilisateur: UtilisateurInput;

  @Field()
  matricule: string;

  @Field()
  sexe: string;

  @Field()
  naissance: Date;
}
