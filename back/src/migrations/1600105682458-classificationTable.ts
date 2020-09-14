import {MigrationInterface, QueryRunner} from "typeorm";

export class classificationTable1600105682458 implements MigrationInterface {
    name = 'classificationTable1600105682458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `eleve` DROP FOREIGN KEY `FK_cc19f0f0a9208e525b22fe720a2`");
        await queryRunner.query("DROP INDEX `REL_cc19f0f0a9208e525b22fe720a` ON `eleve`");
        await queryRunner.query("ALTER TABLE `eleve` CHANGE `utilisateurId` `id_utilisateur` int NOT NULL");
        await queryRunner.query("CREATE TABLE `anneeScolaire` (`id` int NOT NULL AUTO_INCREMENT, `debut` datetime NOT NULL, `fin` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `classification` (`num_appel` int NOT NULL, `id_utilisateur` int NOT NULL, `id_niveau` int NOT NULL, `id_section` int NOT NULL, `id_anneeScolaire` int NOT NULL, PRIMARY KEY (`id_utilisateur`, `id_niveau`, `id_section`, `id_anneeScolaire`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `eleve` ADD UNIQUE INDEX `IDX_e89e9cb49c165d6e31977c5cca` (`id_utilisateur`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_e89e9cb49c165d6e31977c5cca` ON `eleve` (`id_utilisateur`)");
        await queryRunner.query("ALTER TABLE `eleve` ADD CONSTRAINT `FK_e89e9cb49c165d6e31977c5cca0` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `classification` ADD CONSTRAINT `FK_aeb71f1e85c50bc4ce90cc9aa64` FOREIGN KEY (`id_utilisateur`) REFERENCES `eleve`(`id_utilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `classification` ADD CONSTRAINT `FK_e4c82edb372480a186af5b8cabe` FOREIGN KEY (`id_niveau`) REFERENCES `niveau`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `classification` ADD CONSTRAINT `FK_2d8277505369d1801042ae57fd6` FOREIGN KEY (`id_section`) REFERENCES `section`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `classification` ADD CONSTRAINT `FK_cc7de99e11b7478149f99478d24` FOREIGN KEY (`id_anneeScolaire`) REFERENCES `annee_scolaire`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `classification` DROP FOREIGN KEY `FK_cc7de99e11b7478149f99478d24`");
        await queryRunner.query("ALTER TABLE `classification` DROP FOREIGN KEY `FK_2d8277505369d1801042ae57fd6`");
        await queryRunner.query("ALTER TABLE `classification` DROP FOREIGN KEY `FK_e4c82edb372480a186af5b8cabe`");
        await queryRunner.query("ALTER TABLE `classification` DROP FOREIGN KEY `FK_aeb71f1e85c50bc4ce90cc9aa64`");
        await queryRunner.query("ALTER TABLE `eleve` DROP FOREIGN KEY `FK_e89e9cb49c165d6e31977c5cca0`");
        await queryRunner.query("DROP INDEX `REL_e89e9cb49c165d6e31977c5cca` ON `eleve`");
        await queryRunner.query("ALTER TABLE `eleve` DROP INDEX `IDX_e89e9cb49c165d6e31977c5cca`");
        await queryRunner.query("DROP TABLE `classification`");
        await queryRunner.query("DROP TABLE `anneeScolaire`");
        await queryRunner.query("ALTER TABLE `eleve` CHANGE `id_utilisateur` `utilisateurId` int NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_cc19f0f0a9208e525b22fe720a` ON `eleve` (`utilisateurId`)");
        await queryRunner.query("ALTER TABLE `eleve` ADD CONSTRAINT `FK_cc19f0f0a9208e525b22fe720a2` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateur`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
