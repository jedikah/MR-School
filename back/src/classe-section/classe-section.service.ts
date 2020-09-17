import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ClasseSection} from "./classe-section.entity";
import {Repository} from "typeorm";
import {Classe} from "../classe/classe.entity";

@Injectable()
export class ClasseSectionService {
    constructor(
        @InjectRepository(ClasseSection)
        private classeSectionRepository: Repository<ClasseSection>
    ) {}

    async createNiveauSection(sectionniveau: ClasseSection): Promise<ClasseSection> {
        return await this.classeSectionRepository.save(sectionniveau);
    }
    async getAllSectionsOfAClasse(classe: Classe): Promise<ClasseSection[]> {
        return await this.classeSectionRepository.find({ where: [{ classe }]});
    }
}
