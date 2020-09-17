import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {Niveau} from "../niveau.entity";
import {NiveauService} from "../niveau.service";
import {UpdateNiveauInput} from "../types/niveau.input";
import {UnauthorizedException} from "@nestjs/common";


@Resolver()
export class UpdateNiveauResolver {
    constructor(private niveauService: NiveauService) {}

    @Mutation(() => Niveau)
    async updateSection(@Args('updateNiveauInput')niveauInput: UpdateNiveauInput) {
        const niveau = await this.niveauService.findOneNiveauById(niveauInput.id)
        if(!niveau)
            throw new UnauthorizedException('Echec de mis à jour...');

        niveau.designation = niveauInput.designation;
        return await this.niveauService.createOrUpdateNiveau(niveau);
    }
}
