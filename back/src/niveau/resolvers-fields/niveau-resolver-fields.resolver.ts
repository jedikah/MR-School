import {ResolveField, Resolver, Root} from '@nestjs/graphql';
import {Niveau} from "../niveau.entity";
import {Classe} from "../../classe/classe.entity";
import {ClasseService} from "../../classe/classe.service";

@Resolver(() => Niveau)
export class NiveauResolverFieldsResolver {
    constructor(private classeService: ClasseService) {}
    @ResolveField(() => [Classe])
    async classes(@Root()niveau: Niveau): Promise<Classe[]> {
        return this.classeService.findClassesByNiveau(niveau)
    }
}
