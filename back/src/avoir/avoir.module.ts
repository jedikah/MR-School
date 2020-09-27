import { Module } from '@nestjs/common';
import { Avoir } from './avoir.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AvoirService } from './avoir.service';
import { avoirResolvers } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([Avoir])],
  providers: [Avoir, AvoirService, ...avoirResolvers],
  exports: [AvoirService],
})
export class AvoirModule {}
