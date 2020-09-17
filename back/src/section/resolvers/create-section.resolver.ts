import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {SectionService} from "../section.service";
import {Section} from "../section.entity";
import {CreateSectionInput} from "../types/section.input";
import {UnauthorizedException} from "@nestjs/common";

@Resolver()
export class CreateSectionResolver {
    constructor(private sectionService: SectionService) {}

    @Mutation(() => Section)
    async createSection(@Args('createSectionInput')sectionInput: CreateSectionInput) {
        const section = new Section();
        section.designation = sectionInput.designation;
       const saved = await this.sectionService.createOrUpdateSection(section);

       if(!saved)
           throw new UnauthorizedException('La section entrée existe déjà...');

       return saved;
    }
}
