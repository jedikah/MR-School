import { Module } from '@nestjs/common';
import { AnneeScolaireService } from './annee-scolaire.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AnneeScolaire} from "./annee-scolaire.entity";
import {AnneeScolaireResolvers} from "./resolvers";

@Module({
  imports: [TypeOrmModule.forFeature([AnneeScolaire])],
  providers: [AnneeScolaireService, ...AnneeScolaireResolvers]
})
export class AnneeScolaireModule {}
