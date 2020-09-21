import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {SectionService} from "../section.service";
import {Section} from "../section.entity";
import { UpdateSectionInput } from "../types/section.input";
import { UnauthorizedException } from '@nestjs/common';

@Resolver()
export class UpdateSectionResolver {
    constructor(private sectionService: SectionService) {}

    @Mutation(() => Section)
    async updateSection(@Args('updateSectionInput')sectionInput: UpdateSectionInput) {
        const section = await this.sectionService.findOneSection(sectionInput.id)
        if(!section)
            throw new UnauthorizedException('Echec de mis à jour...');

        section.designation = sectionInput.designation;
        return await this.sectionService.createOrUpdateSection(section);
    }
}
