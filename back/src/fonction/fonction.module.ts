import { Module } from '@nestjs/common';
import { FonctionService } from './fonction.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Fonction } from './fonction.entity';
import { fonctionResolvers } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([Fonction])],
  providers: [FonctionService, ...fonctionResolvers],
})
export class FonctionModule {}
