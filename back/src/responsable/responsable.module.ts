import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsable } from './responsable.entity';
import { ResponsableService } from './responsable.service';
import { responsableResolvers } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([Responsable])],
  providers: [ResponsableService, ...responsableResolvers],
})
export class ResponsableModule {}
