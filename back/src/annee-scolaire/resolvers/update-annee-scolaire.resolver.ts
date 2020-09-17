import {Args, Mutation, Resolver} from '@nestjs/graphql';
import { AnneeScolaireService } from "../annee-scolaire.service";
import { AnneeScolaire } from "../annee-scolaire.entity";
import { UpdateAnneeScolaireInput } from "../types/annee-scolaire.input";
import {NotFoundException, UseGuards} from "@nestjs/common";
import {GqlAuthGuard} from "../../auth/jwt-auth.guard";

@Resolver()
export class UpdateAnneeScolaireResolver {
    constructor(private anneeScolaire: AnneeScolaireService) {}

    @Mutation(() => AnneeScolaire)
    @UseGuards(GqlAuthGuard)
    async updateAnneeScolaire(@Args('updateAnneeScolaireInput')anneeScolaireInput: UpdateAnneeScolaireInput) {
        const anneeScolaire = await this.anneeScolaire.findOneAnneeScolaire(anneeScolaireInput.id);
        if(!anneeScolaire)
            throw new NotFoundException('Année scolaire correspondante introuvable')
        anneeScolaire.debut = anneeScolaireInput.debut;
        anneeScolaire.fin = anneeScolaireInput.fin;
        return await this.anneeScolaire.updateAnneeScolaire(anneeScolaire);
    }
}
