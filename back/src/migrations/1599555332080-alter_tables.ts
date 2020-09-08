import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTables1599555332080 implements MigrationInterface {
    name = 'alterTables1599555332080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `responsable` DROP FOREIGN KEY `FK_b13e06c9d1773167f62a6470594`");
        await queryRunner.query("ALTER TABLE `eleve` DROP FOREIGN KEY `FK_9c61a2c4c53e18e4618eec5bccd`");
        await queryRunner.query("DROP INDEX `REL_b13e06c9d1773167f62a647059` ON `responsable`");
        await queryRunner.query("DROP INDEX `REL_9c61a2c4c53e18e4618eec5bcc` ON `eleve`");
        await queryRunner.query("ALTER TABLE `fonction` CHANGE `id_fonction` `id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `responsable` CHANGE `utilisaterId` `utilisateurId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `eleve` CHANGE `utilisaterId` `utilisateurId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `responsable` ADD UNIQUE INDEX `IDX_868d7fa7bb42f9bb68addfacb7` (`utilisateurId`)");
        await queryRunner.query("ALTER TABLE `eleve` ADD UNIQUE INDEX `IDX_cc19f0f0a9208e525b22fe720a` (`utilisateurId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_868d7fa7bb42f9bb68addfacb7` ON `responsable` (`utilisateurId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_cc19f0f0a9208e525b22fe720a` ON `eleve` (`utilisateurId`)");
        await queryRunner.query("ALTER TABLE `responsable` ADD CONSTRAINT `FK_868d7fa7bb42f9bb68addfacb7d` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateur`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `eleve` ADD CONSTRAINT `FK_cc19f0f0a9208e525b22fe720a2` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateur`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `eleve` DROP FOREIGN KEY `FK_cc19f0f0a9208e525b22fe720a2`");
        await queryRunner.query("ALTER TABLE `responsable` DROP FOREIGN KEY `FK_868d7fa7bb42f9bb68addfacb7d`");
        await queryRunner.query("DROP INDEX `REL_cc19f0f0a9208e525b22fe720a` ON `eleve`");
        await queryRunner.query("DROP INDEX `REL_868d7fa7bb42f9bb68addfacb7` ON `responsable`");
        await queryRunner.query("ALTER TABLE `eleve` DROP INDEX `IDX_cc19f0f0a9208e525b22fe720a`");
        await queryRunner.query("ALTER TABLE `responsable` DROP INDEX `IDX_868d7fa7bb42f9bb68addfacb7`");
        await queryRunner.query("ALTER TABLE `eleve` CHANGE `utilisateurId` `utilisaterId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `responsable` CHANGE `utilisateurId` `utilisaterId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `fonction` CHANGE `id` `id_fonction` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_9c61a2c4c53e18e4618eec5bcc` ON `eleve` (`utilisaterId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_b13e06c9d1773167f62a647059` ON `responsable` (`utilisaterId`)");
        await queryRunner.query("ALTER TABLE `eleve` ADD CONSTRAINT `FK_9c61a2c4c53e18e4618eec5bccd` FOREIGN KEY (`utilisaterId`) REFERENCES `utilisateur`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `responsable` ADD CONSTRAINT `FK_b13e06c9d1773167f62a6470594` FOREIGN KEY (`utilisaterId`) REFERENCES `utilisateur`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
