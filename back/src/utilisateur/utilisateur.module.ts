import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { utilisateurResolvers } from './resolvers';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur])],
  providers: [...utilisateurResolvers, UtilisateurService],
  exports: [UtilisateurService]
})
export class UtilisateurModule {}
