import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Classification} from "./classification.entity";
import {Repository} from "typeorm";
import {GetIfClassificationExists} from "./types/classification.interface";

@Injectable()
export class ClassificationService {
    constructor(
        @InjectRepository(Classification)
        private classificationRepository: Repository<Classification>
    ) {}

    async createClassification(classification: Classification): Promise<Classification> {
        return await this.classificationRepository.save(classification)
    }

    async findOneClassification(search: GetIfClassificationExists): Promise<Classification> {
        /**Un élève ne se trouve qu'à une classeEntity pendant une année scolaire*/
        /**Dans ce cas, son identifiant ne se répète pas pour une année scolaire*/
        return await this.classificationRepository.findOne({
            where: {
                idEleve: search.idEleve,
                idAnneeScolaire: search.idAnneeScolaire
            }
        })

    }
}
