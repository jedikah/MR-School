import {MigrationInterface, QueryRunner} from "typeorm";

export class tableUtilisateur1599051489857 implements MigrationInterface {
    name = 'tableUtilisateur1599051489857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `utilisateur` (`id` int NOT NULL AUTO_INCREMENT, `nom` varchar(20) NOT NULL, `prenom` varchar(30) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `utilisateur`");
    }

}
