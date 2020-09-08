import { Module } from '@nestjs/common';
import { EleveService } from './eleve.service';
import { eleveResolvers } from './resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eleve } from './eleve.entity';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { Utilisateur } from '../utilisateur/utilisateur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Eleve, Utilisateur])],
  providers: [EleveService, ...eleveResolvers, UtilisateurService],
})
export class EleveModule {}
