import {Global, Module} from '@nestjs/common';
import { SectionService } from './section.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Section} from "./section.entity";
import {SectionResolvers} from "./resolvers";

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([Section]),
    ],
    providers: [SectionService, ...SectionResolvers],
    exports: [ SectionService ]
})
export class SectionModule {}
