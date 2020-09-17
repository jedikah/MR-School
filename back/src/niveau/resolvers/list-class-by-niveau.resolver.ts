import {Query, Resolver} from '@nestjs/graphql';
import {NiveauService} from "../niveau.service";
import {Niveau} from "../niveau.entity";

@Resolver()
export class ListClassByNiveauResolver {
    constructor(private niveauService: NiveauService) {}

    @Query(() => [Niveau])
    async getAllNiveaux(): Promise<Niveau[]> {
        return await this.niveauService.getAllNiveaux();
    }
}
