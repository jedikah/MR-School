import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { utilisateurResolvers } from './resolvers';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur.entity';
import { ResponsableService } from 'src/responsable/responsable.service';
import { Responsable } from 'src/responsable/responsable.entity';
import { FonctionService } from 'src/fonction/fonction.service';
import { Fonction } from 'src/fonction/fonction.entity';
import { AvoirService } from 'src/avoir/avoir.service';
import { Avoir } from 'src/avoir/avoir.entity';
import { EleveService } from 'src/eleve/eleve.service';
import { Eleve } from 'src/eleve/eleve.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Utilisateur,
      Responsable,
      Fonction,
      Avoir,
      Eleve,
    ]),
  ],
  providers: [
    ...utilisateurResolvers,
    UtilisateurService,
    ResponsableService,
    FonctionService,
    AvoirService,
    EleveService,
  ],
})
export class UtilisateurModule {}
