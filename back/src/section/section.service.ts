import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Section} from "./section.entity";
import {Repository} from "typeorm";

@Injectable()
export class SectionService {
    constructor(
        @InjectRepository(Section)
        private sectionRepository: Repository<Section>
    ) {}

    async createOrUpdateSection(setion: Section): Promise<Section> {
        return await this.sectionRepository.save(setion)
    }
    async findOneSection(idSection: number): Promise<Section> {
        return await this.sectionRepository.findOne(idSection);
    }
}
