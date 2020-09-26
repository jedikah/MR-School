import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatiereService } from './matiere.service';
import { MatiereResolvers } from './resolvers';
import { Matiere } from './matiere.entity';
import { ClasseModule } from '../classe/classe.module';
import { MatiereResolverFields } from './filed-resolvers';
import { CoefficientModule } from '../coefficient/coefficient.module';
import { MatiereUtils } from './matiere.utils';
import { ClasseSectionModule } from '../classe-section/classe-section.module';
import { EnseignerModule } from '../enseigner/enseigner.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Matiere]),
    ClasseModule,
    ClasseSectionModule,
    EnseignerModule,
    forwardRef(() => CoefficientModule),
  ],
  providers: [
    MatiereService,
    MatiereUtils,
    ...MatiereResolvers,
    ...MatiereResolverFields,
  ],
  exports: [MatiereService, MatiereUtils],
})
export class MatiereModule {}
