import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateSkills1696402102013 implements MigrationInterface {
  name = 'CreateSkills1696402102013'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "skill" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "UQ_0f49a593960360f6f85b692aca8" UNIQUE ("name"), CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))`,
    )

    await queryRunner.query(
      `INSERT INTO "skill" ("name", "category") VALUES ('TypeScript', 'Language'), ('CSS', 'Language'), ('React', 'Frontend'), ('Next.js', 'Framework'), ('GraphQL', 'Backend');`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "skill"`)
  }
}
