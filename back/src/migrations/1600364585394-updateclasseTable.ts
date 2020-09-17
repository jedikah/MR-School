import {MigrationInterface, QueryRunner} from "typeorm";

export class updateclasseTable1600364585394 implements MigrationInterface {
    name = 'updateclasseTable1600364585394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `eleve` ADD `id_parent` int NULL");
        await queryRunner.query("ALTER TABLE `utilisateur` ADD UNIQUE INDEX `IDX_32391d9cd29d6269b00b7dfea1` (`contact`)");
        await queryRunner.query("DROP INDEX `IDX_f039bd28df6f97f79aa7cf8ee6` ON `section`");
        await queryRunner.query("ALTER TABLE `section` DROP COLUMN `designation`");
        await queryRunner.query("ALTER TABLE `section` ADD `designation` varchar(5) NOT NULL");
        await queryRunner.query("ALTER TABLE `section` ADD UNIQUE INDEX `IDX_f039bd28df6f97f79aa7cf8ee6` (`designation`)");
        await queryRunner.query("ALTER TABLE `parent` ADD UNIQUE INDEX `IDX_73aa4810cd6d4240887038a369` (`contact`)");
        await queryRunner.query("ALTER TABLE `eleve` ADD CONSTRAINT `FK_2f958bb791a4cb42408e157804b` FOREIGN KEY (`id_parent`) REFERENCES `parent`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `eleve` DROP FOREIGN KEY `FK_2f958bb791a4cb42408e157804b`");
        await queryRunner.query("ALTER TABLE `parent` DROP INDEX `IDX_73aa4810cd6d4240887038a369`");
        await queryRunner.query("ALTER TABLE `section` DROP INDEX `IDX_f039bd28df6f97f79aa7cf8ee6`");
        await queryRunner.query("ALTER TABLE `section` DROP COLUMN `designation`");
        await queryRunner.query("ALTER TABLE `section` ADD `designation` varchar(25) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_f039bd28df6f97f79aa7cf8ee6` ON `section` (`designation`)");
        await queryRunner.query("ALTER TABLE `utilisateur` DROP INDEX `IDX_32391d9cd29d6269b00b7dfea1`");
        await queryRunner.query("ALTER TABLE `eleve` DROP COLUMN `id_parent`");
    }

}
