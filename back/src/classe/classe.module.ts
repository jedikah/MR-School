import {Global, Module} from '@nestjs/common';
import { ClasseService } from './classe.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Classe} from "./classe.entity";
import {ClasseResolvers} from "./resolvers";

@Global()
@Module({
  imports: [
      TypeOrmModule.forFeature([Classe])
  ],
  providers: [ClasseService, ...ClasseResolvers],
  exports: [ClasseService]
})
export class ClasseModule {}
