import {MigrationInterface, QueryRunner} from "typeorm";

export class sectionNiveauTable1600104953153 implements MigrationInterface {
    name = 'sectionNiveauTable1600104953153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `section_niveau` (`id_niveau` int NOT NULL, `id_section` int NOT NULL, PRIMARY KEY (`id_niveau`, `id_section`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `section_niveau` ADD CONSTRAINT `FK_584c02067da081344b2b24e4dfb` FOREIGN KEY (`id_niveau`) REFERENCES `niveau`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `section_niveau` ADD CONSTRAINT `FK_9bf5aa300e70e2b217793f78724` FOREIGN KEY (`id_section`) REFERENCES `section`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `section_niveau` DROP FOREIGN KEY `FK_9bf5aa300e70e2b217793f78724`");
        await queryRunner.query("ALTER TABLE `section_niveau` DROP FOREIGN KEY `FK_584c02067da081344b2b24e4dfb`");
        await queryRunner.query("DROP TABLE `section_niveau`");
    }

}
