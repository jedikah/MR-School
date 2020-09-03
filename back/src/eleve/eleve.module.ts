import { Module } from '@nestjs/common';
import { EleveService } from './eleve.service';
import { eleveResolvers } from './resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eleve } from './eleve.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Eleve])],
  providers: [EleveService, ...eleveResolvers],
})
export class EleveModule {}
