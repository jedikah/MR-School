import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Niveau} from "./niveau.entity";
import {Repository} from "typeorm";

@Injectable()
export class NiveauService {
    constructor(
        @InjectRepository(Niveau)
        private niveauRepository: Repository<Niveau>
    ) {}

    async createOrUpdateNiveau(niveau: Niveau): Promise<Niveau> {
        return await this.niveauRepository.save(niveau);
    }
    async findOneNiveauByDesignation(designation: string): Promise<Niveau> {
        return await this.niveauRepository.findOne({
            where: {
                designation: designation
            }
        })
    }
    async findOneNiveauById(id: number): Promise<Niveau> {
        return await this.niveauRepository.findOne(id);
    }

    async getAllNiveaux(): Promise<Niveau[]> {
        return await this.niveauRepository.find({
            order: {
                id: "ASC"
            }
        })
    }

}
