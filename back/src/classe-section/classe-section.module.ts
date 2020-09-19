import {Global, Module} from '@nestjs/common';
import {ClasseSectionService} from "./classe-section.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ClasseSection} from "./classe-section.entity";
import { ClasseSectionResolvers } from './resolvers';

@Global()
@Module({
    imports: [
      TypeOrmModule.forFeature([ClasseSection]),
    ],
    providers: [
      ClasseSectionService,
      ...ClasseSectionResolvers
    ],
    exports: [ ClasseSectionService ]
})
export class ClasseSectionModule {}
