import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {ClassificationService} from "../classification.service";
import {Classification} from "../classification.entity";
import {CreateClassificationInput} from "../types/classification.input";
import {UnauthorizedException} from "@nestjs/common";

@Resolver()
export class CreateClassificationResolver {
    constructor(private classificationService: ClassificationService) {}

    @Mutation(() => Classification)
    async createClassification(@Args('createClassificationInput') classificationInput: CreateClassificationInput)
    {
        const classification = new Classification();
        classification.idEleve = classificationInput.idEleve;
        classification.idNiveau = classificationInput.idNiveau;
        classification.idSection = classificationInput.idSection;
        classification.idAnneeScolaire = classificationInput.idAnneeScolaire;
        classification.numAppel = classificationInput.numAppel;

        const search = await this.classificationService.findOneClassification({
            idEleve: classificationInput.idEleve,
            idAnneeScolaire: classificationInput.idAnneeScolaire
        })

        if(search)
            throw new UnauthorizedException("L'élève figure déjà en " + search.idNiveau + " " + search.idSection)

        return this.classificationService.createClassification(classification);
    }
}
