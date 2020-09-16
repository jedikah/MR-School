import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from './parent.entity';
import { ParentService } from './parent.service';

import { parentResolvers } from './resolver/index';

@Module({
  imports: [TypeOrmModule.forFeature([Parent])],
  providers: [...parentResolvers, ParentService],
})
export class ParentModule {}
