import {MigrationInterface, QueryRunner} from "typeorm";

export class foreignKeyParentTableEleve1600193728811 implements MigrationInterface {
    name = 'foreignKeyParentTableEleve1600193728811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_e89e9cb49c165d6e31977c5cca` ON `eleve`");
        await queryRunner.query("ALTER TABLE `eleve` ADD `id_parent` int NULL");
        await queryRunner.query("ALTER TABLE `eleve` ADD CONSTRAINT `FK_2f958bb791a4cb42408e157804b` FOREIGN KEY (`id_parent`) REFERENCES `parent`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `eleve` DROP FOREIGN KEY `FK_2f958bb791a4cb42408e157804b`");
        await queryRunner.query("ALTER TABLE `eleve` DROP COLUMN `id_parent`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_e89e9cb49c165d6e31977c5cca` ON `eleve` (`id_utilisateur`)");
    }

}
