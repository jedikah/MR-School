import {MigrationInterface, QueryRunner} from "typeorm";

export class tableEleve1599174834157 implements MigrationInterface {
    name = 'tableEleve1599174834157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `eleve` (`matricule` varchar(10) NOT NULL, `sexe` varchar(1) NOT NULL, `naissance` datetime NOT NULL, `utilisaterId` int NOT NULL, UNIQUE INDEX `REL_9c61a2c4c53e18e4618eec5bcc` (`utilisaterId`), PRIMARY KEY (`utilisaterId`)) ENGINE=InnoDB");
        await queryRunner.query("DROP INDEX `IDX_56a5c2845b24d00576d269db3a` ON `fonction`");
        await queryRunner.query("ALTER TABLE `fonction` DROP COLUMN `designation`");
        await queryRunner.query("ALTER TABLE `fonction` ADD `designation` varchar(10) NOT NULL");
        await queryRunner.query("ALTER TABLE `fonction` ADD UNIQUE INDEX `IDX_56a5c2845b24d00576d269db3a` (`designation`)");
        await queryRunner.query("ALTER TABLE `eleve` ADD CONSTRAINT `FK_9c61a2c4c53e18e4618eec5bccd` FOREIGN KEY (`utilisaterId`) REFERENCES `utilisateur`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `eleve` DROP FOREIGN KEY `FK_9c61a2c4c53e18e4618eec5bccd`");
        await queryRunner.query("ALTER TABLE `fonction` DROP INDEX `IDX_56a5c2845b24d00576d269db3a`");
        await queryRunner.query("ALTER TABLE `fonction` DROP COLUMN `designation`");
        await queryRunner.query("ALTER TABLE `fonction` ADD `designation` varchar(255) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_56a5c2845b24d00576d269db3a` ON `fonction` (`designation`)");
        await queryRunner.query("DROP INDEX `REL_9c61a2c4c53e18e4618eec5bcc` ON `eleve`");
        await queryRunner.query("DROP TABLE `eleve`");
    }

}
