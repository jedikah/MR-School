import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnseignerService } from './enseigner.service';
import { Enseigner } from './enseigner.entity';
import { MatiereModule } from '../matiere/matiere.module';
import { EnseignerResolvers } from './resolvers';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enseigner]),
    forwardRef(() => MatiereModule),
  ],
  providers: [EnseignerService, ...EnseignerResolvers],
  exports: [EnseignerService],
})
export class EnseignerModule {}
