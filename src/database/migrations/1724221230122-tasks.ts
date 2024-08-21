import { MigrationInterface, QueryRunner } from "typeorm";

export class Tasks1724221230122 implements MigrationInterface {
    name = 'Tasks1724221230122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'NOT_STARTED'`);
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'NOT_STARTED'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`status\` \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` CHANGE \`status\` \`status\` varchar(255) NOT NULL`);
    }

}
