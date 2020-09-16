import { Module } from '@nestjs/common';
import { EleveService } from './eleve.service';
import { eleveResolvers } from './resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eleve } from './eleve.entity';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { Parent } from '../parent/parent.entity';
import { ParentService } from '../parent/parent.service';

@Module({
  imports: [TypeOrmModule.forFeature([Eleve, Utilisateur, Parent])],
  providers: [
    EleveService,
    ...eleveResolvers,
    UtilisateurService,
    ParentService,
  ],
})
export class EleveModule {}
