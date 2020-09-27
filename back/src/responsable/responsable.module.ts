import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsable } from './responsable.entity';
import { ResponsableService } from './responsable.service';
import { responsableResolvers } from './resolvers';
import { Fonction } from '../fonction/fonction.entity';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { Avoir } from '../avoir/avoir.entity';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { FonctionService } from '../fonction/fonction.service';
import { AvoirService } from '../avoir/avoir.service';
import { resolverField } from './resolver-fields';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur, Responsable, Fonction, Avoir]),
  ],
  providers: [
    ResponsableService,
    ...responsableResolvers,
    ...resolverField,
    UtilisateurService,
    FonctionService,
    AvoirService,
  ],
  exports: [ResponsableService],
})
export class ResponsableModule {}
