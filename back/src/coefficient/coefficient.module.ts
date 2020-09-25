import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Coefficient } from './coefficient.entity';
import { CoefficientService } from './coefficient.service';
import { CoefficientResolvers } from './resolvers';
import { MatiereModule } from '../matiere/matiere.module';
import { ClasseModule } from '../classe/classe.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coefficient]),
    forwardRef(() => MatiereModule),
    ClasseModule,
  ],
  providers: [CoefficientService, ...CoefficientResolvers],
  exports: [CoefficientService],
})
export class CoefficientModule {}
