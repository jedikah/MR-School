import {MigrationInterface, QueryRunner} from "typeorm";

export class AnneeScolaireTable1600105129536 implements MigrationInterface {
    name = 'AnneeScolaireTable1600105129536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `annee_scolaire` (`id` int NOT NULL AUTO_INCREMENT, `debut` datetime NOT NULL, `fin` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `annee_scolaire`");
    }

}
