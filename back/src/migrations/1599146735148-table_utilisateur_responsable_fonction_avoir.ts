import {MigrationInterface, QueryRunner} from "typeorm";

export class tableUtilisateurResponsableFonctionAvoir1599146735148 implements MigrationInterface {
    name = 'tableUtilisateurResponsableFonctionAvoir1599146735148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `fonction` (`id_fonction` int NOT NULL AUTO_INCREMENT, `designation` varchar(255) NOT NULL, UNIQUE INDEX `IDX_56a5c2845b24d00576d269db3a` (`designation`), PRIMARY KEY (`id_fonction`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `utilisateur` (`id` int NOT NULL AUTO_INCREMENT, `nom` varchar(20) NOT NULL, `prenom` varchar(30) NOT NULL, `adresse` varchar(60) NOT NULL, `contact` varchar(10) NOT NULL, `photo` varchar(255) NULL, `mot_de_passe` varchar(60) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `responsable` (`utilisaterId` int NOT NULL, UNIQUE INDEX `REL_b13e06c9d1773167f62a647059` (`utilisaterId`), PRIMARY KEY (`utilisaterId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `avoir` (`id_responsable` int NOT NULL, `id_fonction` int NOT NULL, PRIMARY KEY (`id_responsable`, `id_fonction`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `responsable` ADD CONSTRAINT `FK_b13e06c9d1773167f62a6470594` FOREIGN KEY (`utilisaterId`) REFERENCES `utilisateur`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `avoir` ADD CONSTRAINT `FK_1a5ea0bc9d62797d51141eaac63` FOREIGN KEY (`id_responsable`) REFERENCES `responsable`(`utilisaterId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `avoir` ADD CONSTRAINT `FK_54c7fa72cd2e769973d14d1072e` FOREIGN KEY (`id_fonction`) REFERENCES `fonction`(`id_fonction`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `avoir` DROP FOREIGN KEY `FK_54c7fa72cd2e769973d14d1072e`");
        await queryRunner.query("ALTER TABLE `avoir` DROP FOREIGN KEY `FK_1a5ea0bc9d62797d51141eaac63`");
        await queryRunner.query("ALTER TABLE `responsable` DROP FOREIGN KEY `FK_b13e06c9d1773167f62a6470594`");
        await queryRunner.query("DROP TABLE `avoir`");
        await queryRunner.query("DROP INDEX `REL_b13e06c9d1773167f62a647059` ON `responsable`");
        await queryRunner.query("DROP TABLE `responsable`");
        await queryRunner.query("DROP TABLE `utilisateur`");
        await queryRunner.query("DROP INDEX `IDX_56a5c2845b24d00576d269db3a` ON `fonction`");
        await queryRunner.query("DROP TABLE `fonction`");
    }

}
