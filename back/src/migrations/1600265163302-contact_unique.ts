import {MigrationInterface, QueryRunner} from "typeorm";

export class contactUnique1600265163302 implements MigrationInterface {
    name = 'contactUnique1600265163302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_8fcd5805e4251f09b00893094d` ON `parent`");
        await queryRunner.query("DROP INDEX `IDX_f7474e8409b0744e317dd10fd2` ON `parent`");
        await queryRunner.query("ALTER TABLE `utilisateur` ADD UNIQUE INDEX `IDX_32391d9cd29d6269b00b7dfea1` (`contact`)");
        await queryRunner.query("ALTER TABLE `parent` ADD UNIQUE INDEX `IDX_73aa4810cd6d4240887038a369` (`contact`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `parent` DROP INDEX `IDX_73aa4810cd6d4240887038a369`");
        await queryRunner.query("ALTER TABLE `utilisateur` DROP INDEX `IDX_32391d9cd29d6269b00b7dfea1`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_f7474e8409b0744e317dd10fd2` ON `parent` (`adresse`)");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_8fcd5805e4251f09b00893094d` ON `parent` (`tuteur`)");
    }

}
