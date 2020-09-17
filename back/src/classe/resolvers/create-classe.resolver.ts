import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {ClasseService} from "../classe.service";
import {CreateClasseInput} from "../types/classe.input";
import {Classe} from "../classe.entity";
import {NiveauService} from "../../niveau/niveau.service";
import {UnauthorizedException} from "@nestjs/common";

@Resolver()
export class CreateClasseResolver {
    constructor(
        private classeService: ClasseService,
        private niveauService: NiveauService
    ) {}
    @Mutation(() => Classe)
    async createClasse(@Args('createClasseInput')classeInput:CreateClasseInput): Promise<Classe> {

        /**Vérifier si le niveau existe*/
        const niveau = await this.niveauService.findOneNiveauById(classeInput.idNiveau);
        if(!niveau)
            throw new UnauthorizedException("Le niveau comportant numéro " + classeInput.idNiveau + " existe ...")

        /**Vérifier si la classe existe déjà*/
        let classe = await this.classeService.findOneClasseByDesignation(classeInput.designation);
        if(classe)
            throw  new UnauthorizedException("La classe de " + classe.designation + " existe déjà ...")

        /** sinon */
        classe = new Classe();
        classe.niveau = niveau;
        classe.designation = classeInput.designation;
        return await this.classeService.createOrUpdateClasse(classe);
    }
}
