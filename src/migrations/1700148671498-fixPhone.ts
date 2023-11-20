import { MigrationInterface, QueryRunner } from "typeorm";

export class FixPhone1700148671498 implements MigrationInterface {
    name = 'FixPhone1700148671498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "phone_number" TO "phone"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" TO "UQ_a000cca60bcf04454e727699490"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_a000cca60bcf04454e727699490" TO "UQ_17d1817f241f10a3dbafb169fd2"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "phone" TO "phone_number"`);
    }

}
