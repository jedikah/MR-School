import {MigrationInterface, QueryRunner} from "typeorm";

export class sectionTable1600104336041 implements MigrationInterface {
    name = 'sectionTable1600104336041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `section` (`id` int NOT NULL AUTO_INCREMENT, `designation` varchar(25) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `section`");
    }

}
