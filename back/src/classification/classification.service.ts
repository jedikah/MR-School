import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Classification} from "./classification.entity";
import {Repository} from "typeorm";
import {GetIfClassificationExists} from "./types/classification.interface";
import { Eleve } from '../eleve/eleve.entity';
import { AnneeScolaire } from '../annee-scolaire/annee-scolaire.entity';

@Injectable()
export class ClassificationService {
    constructor(
        @InjectRepository(Classification)
        private classificationRepository: Repository<Classification>
    ) {}

    async createOrUpdateClassification(classification: Classification): Promise<Classification> {
        return await this.classificationRepository.save(classification)
    }

    async findOneClassification(eleve: Eleve, anneeScolaire: AnneeScolaire): Promise<Classification> {
        return await this.classificationRepository.findOne({
            where: {
                eleve: eleve,
                anneeScolaire: anneeScolaire
            }
        })

    }
}
