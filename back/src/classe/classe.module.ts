import {Global, Module} from '@nestjs/common';
import { ClasseService } from './classe.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Classe} from "./classe.entity";
import {ClasseResolvers} from "./resolvers";
import { ClasseResolverField } from './resolever-field/classe-resolver-field';

@Global()
@Module({
  imports: [
      TypeOrmModule.forFeature([Classe])
  ],
  providers: [
    ClasseService,
    ...ClasseResolvers,
    ClasseResolverField
  ],
  exports: [ClasseService]
})
export class ClasseModule {}
