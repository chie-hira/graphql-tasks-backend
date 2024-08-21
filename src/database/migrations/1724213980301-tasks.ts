import { MigrationInterface, QueryRunner } from "typeorm";

export class Tasks1724213980301 implements MigrationInterface {
    name = 'Tasks1724213980301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`createdAt\``);
    }

}
