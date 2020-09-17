import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {AnneeScolaire} from "./annee-scolaire.entity";
import {Repository} from "typeorm";

@Injectable()
export class AnneeScolaireService {
    constructor(
        @InjectRepository(AnneeScolaire)
        private anneeScolairesRepository: Repository<AnneeScolaire>
    ) {}

    async createAnneeScolaire(anneeScolaire: AnneeScolaire): Promise<AnneeScolaire> {
        return await this.anneeScolairesRepository.save(anneeScolaire)
    }

    async findOneAnneeScolaire(id: number): Promise<AnneeScolaire> {
        return await this.anneeScolairesRepository.findOne(id)
    }

    async updateAnneeScolaire(nouvelleAnneeScolaire: AnneeScolaire): Promise<AnneeScolaire> {

        return await this.anneeScolairesRepository.save(nouvelleAnneeScolaire)
    }
}
