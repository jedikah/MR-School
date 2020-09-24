import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Coefficient } from './coefficient.entity';
import { CoefficientService } from './coefficient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coefficient])],
  providers: [CoefficientService],
  exports: [CoefficientService],
})
export class CoefficientModule {}
