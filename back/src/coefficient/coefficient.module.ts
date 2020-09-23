import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Coefficient } from './coefficient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coefficient])],
})
export class CoefficientModule {}
