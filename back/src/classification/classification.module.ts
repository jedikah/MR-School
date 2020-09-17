import { Module } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import {ClassificationResolvers} from "./resolvers";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Classification} from "./classification.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([Classification])
  ],
  providers: [
      ClassificationService,
      ...ClassificationResolvers
  ]
})
export class ClassificationModule {}
