import {MigrationInterface, QueryRunner} from "typeorm";

export class parentTable1600104103800 implements MigrationInterface {
    name = 'parentTable1600104103800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_868d7fa7bb42f9bb68addfacb7` ON `responsable`");
        await queryRunner.query("DROP INDEX `IDX_cc19f0f0a9208e525b22fe720a` ON `eleve`");
        await queryRunner.query("CREATE TABLE `parent` (`id` int NOT NULL AUTO_INCREMENT, `pere` varchar(60) NOT NULL, `mere` varchar(60) NOT NULL, `tuteur` varchar(60) NOT NULL, `adresse` varchar(60) NOT NULL, `contact` varchar(60) NOT NULL, UNIQUE INDEX `IDX_8fcd5805e4251f09b00893094d` (`tuteur`), UNIQUE INDEX `IDX_f7474e8409b0744e317dd10fd2` (`adresse`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_f7474e8409b0744e317dd10fd2` ON `parent`");
        await queryRunner.query("DROP INDEX `IDX_8fcd5805e4251f09b00893094d` ON `parent`");
        await queryRunner.query("DROP TABLE `parent`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_cc19f0f0a9208e525b22fe720a` ON `eleve` (`utilisateurId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_868d7fa7bb42f9bb68addfacb7` ON `responsable` (`utilisateurId`)");
    }

}
