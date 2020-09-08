import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsable } from './responsable.entity';
import { ResponsableService } from './responsable.service';
import { responsableResolvers } from './resolvers';
import { Fonction } from 'src/fonction/fonction.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { Avoir } from 'src/avoir/avoir.entity';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { FonctionService } from 'src/fonction/fonction.service';
import { AvoirService } from 'src/avoir/avoir.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur, Responsable, Fonction, Avoir]),
  ],
  providers: [
    ResponsableService,
    ...responsableResolvers,
    UtilisateurService,
    FonctionService,
    AvoirService,
  ],
})
export class ResponsableModule {}
