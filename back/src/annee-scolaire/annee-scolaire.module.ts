import { Global, Module } from '@nestjs/common';
import { AnneeScolaireService } from './annee-scolaire.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AnneeScolaire} from "./annee-scolaire.entity";
import {AnneeScolaireResolvers} from "./resolvers";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AnneeScolaire])],
  providers: [AnneeScolaireService, ...AnneeScolaireResolvers],
  exports: [AnneeScolaireService]
})
export class AnneeScolaireModule {}
