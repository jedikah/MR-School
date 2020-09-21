import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {NiveauService} from "../niveau.service";
import {Niveau} from "../niveau.entity";
import {CreateNiveauInput} from "../types/niveau.input";
import {UnauthorizedException} from "@nestjs/common";

@Resolver()
export class CreateNiveauResolver {
    constructor(private niveauService: NiveauService) {}

    @Mutation(() =>Niveau)
    async createNiveau(@Args('createNiveauInput')niveauInput: CreateNiveauInput) {

        let niveau: Niveau = await this.niveauService.findOneNiveauByDesignation(niveauInput.designation);

        if(niveau)
            throw new UnauthorizedException("Niveau " + niveauInput.designation + " existe déjà")

        niveau = new Niveau();
        niveau.designation = niveauInput.designation;
        return await this.niveauService.createOrUpdateNiveau(niveau)
    }
}
