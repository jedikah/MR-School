import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Classe} from "./classe.entity";
import {Repository} from "typeorm";
import {Niveau} from "../niveau/niveau.entity";

@Injectable()
export class ClasseService {
    constructor(
        @InjectRepository(Classe)
        private classeServiceRepository: Repository<Classe>
    ) {}

    async createOrUpdateClasse(classe: Classe): Promise<Classe> {
        return await this.classeServiceRepository.save(classe);
    }
    async findOneClasseByDesignation(designation: string): Promise<Classe> {
        return await this.classeServiceRepository.findOne({
            where: {
                designation: designation
            }
        })
    }
    async findOneClasseById(id: number): Promise<Classe> {
        return await this.classeServiceRepository.findOne(id)
    }
    /** Pour récupérer, les classes d'un niveau*/
    async findClassesByNiveau(niveau: Niveau): Promise<Classe[]> {
        return await this.classeServiceRepository.find({
            where: {
                niveau: niveau
            }
        })
    }

    /**Pour récupérer toutes les classes*/
    async getAllClasses(): Promise<Classe[]> {
        return await this.classeServiceRepository.find({
            order: {
                id: "ASC"
            }
        })
    }
}
