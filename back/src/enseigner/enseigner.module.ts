import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnseignerService } from './enseigner.service';
import { Enseigner } from './enseigner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enseigner])],
  providers: [EnseignerService],
  exports: [EnseignerService],
})
export class EnseignerModule {}
