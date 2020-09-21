import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {AnneeScolaireService} from "../annee-scolaire.service";
import {AnneeScolaire} from "../annee-scolaire.entity";
import { CreateAnneeScolaireInput } from "../types/annee-scolaire.input";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../../auth/jwt-auth.guard";

@Resolver()
export class CreateAnneeScolaireResolver {
    constructor(private anneeScolaireService: AnneeScolaireService) {}

    @Mutation(() => AnneeScolaire)
    @UseGuards(GqlAuthGuard)
    async createAnneeScolaire(@Args('createAnneeScolaireInput')anneeScolaireInput: CreateAnneeScolaireInput) {
        const anneeScolaire = new AnneeScolaire();
        anneeScolaire.debut = new Date(anneeScolaireInput.debut);
        anneeScolaire.fin = new Date(anneeScolaireInput.fin);
        return await this.anneeScolaireService.createAnneeScolaire(anneeScolaire);

    }
}
