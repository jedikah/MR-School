import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {ClassificationService} from "../classification.service";
import {Classification} from "../classification.entity";
import {CreateClassificationInput} from "../types/classification.input";
import {UnauthorizedException} from "@nestjs/common";
import { EleveService } from '../../eleve/eleve.service';
import { AnneeScolaireService } from '../../annee-scolaire/annee-scolaire.service';
import { ClasseService } from '../../classe/classe.service';
import { SectionService } from '../../section/section.service';

@Resolver()
export class CreateClassificationResolver {
    constructor(
      private classificationService: ClassificationService,
      private eleveService: EleveService,
      private classeService: ClasseService,
      private sectionService: SectionService,
      private anneeScolaireService: AnneeScolaireService
    ) {}

    @Mutation(() => Classification)
    async createClassification(@Args('createClassificationInput') classificationInput: CreateClassificationInput)
    {

        /**Un élève ne se trouve qu'à une classeEntity pendant une année scolaire*/
        /**Dans ce cas, son identifiant ne se répète pas pour une année scolaire*/
        /*const anneeScolaire = await this.anneeScolaireService.findOneAnneeScolaire(classificationInput.idAnneeScolaire);
        const eleve = await this.eleveService.searchEleveByIdUtilisateur(classificationInput.idEleve);
        const classe = await this.classeService.findOneClasseById(classificationInput.idClasse);
        const section = await this.sectionService.findOneSection(classificationInput.idSection);

        const search = await this.classificationService.findOneClassification(eleve, anneeScolaire);

        if(search)
            throw new UnauthorizedException(
              "L'élève figure déjà en "
              + classe.designation + " "
              + section.designation);

        const classification = new Classification();
        classification.eleve = eleve;
        classification.classe = classe
        classification.section = section;
        classification.anneeScolaire = anneeScolaire;
        classification.numAppel = classificationInput.numAppel;

        return this.classificationService.createOrUpdateClassification(classification);*/
        return null
    }
}
