import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ClasseSection} from "./classe-section.entity";
import {Repository} from "typeorm";
import {Classe} from "../classe/classe.entity";
import { Section } from '../section/section.entity';

@Injectable()
export class ClasseSectionService {
    constructor(
        @InjectRepository(ClasseSection)
        private classeSectionRepository: Repository<ClasseSection>
    ) {}

    async createOrUpdateSectionsOfClasse(sectionClasse: ClasseSection): Promise<ClasseSection> {
        return await this.classeSectionRepository.save(sectionClasse);
    }
    async findOneSectionofAClasse(classe: Classe, section: Section): Promise<ClasseSection> {
        return await this.classeSectionRepository.findOne({
            where: { classe: classe, section: section }
        })
    }
    async getAllSectionsOfAClasse(classe: Classe): Promise<ClasseSection[]> {
        return await this.classeSectionRepository.find({ where: [{ classe }]});
    }
}
