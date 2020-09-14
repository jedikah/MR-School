import {MigrationInterface, QueryRunner} from "typeorm";

export class niveauTable1600104238799 implements MigrationInterface {
    name = 'niveauTable1600104238799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `niveau` (`id` int NOT NULL AUTO_INCREMENT, `designation` varchar(25) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `niveau`");
    }

}
