import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatiereService } from './matiere.service';
import { MatiereResolvers } from './resolvers';
import { Matiere } from './matiere.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matiere])],
  providers: [MatiereService, ...MatiereResolvers],
})
export class MatiereModule {}
