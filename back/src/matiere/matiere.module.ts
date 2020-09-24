import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatiereService } from './matiere.service';
import { MatiereResolvers } from './resolvers';
import { Matiere } from './matiere.entity';
import { ClasseModule } from '../classe/classe.module';
import { MatiereResolverFields } from './filed-resolvers';
import { CoefficientModule } from '../coefficient/coefficient.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Matiere]),
    ClasseModule,
    CoefficientModule,
  ],
  providers: [MatiereService, ...MatiereResolvers, ...MatiereResolverFields],
})
export class MatiereModule {}
