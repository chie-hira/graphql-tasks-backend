import { MigrationInterface, QueryRunner } from "typeorm";

export class Tasks1724209000575 implements MigrationInterface {
    name = 'Tasks1724209000575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tasks\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`dueDate\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tasks\``);
    }

}
