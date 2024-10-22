"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSkills1696402102013 = void 0;
class CreateSkills1696402102013 {
    constructor() {
        this.name = 'CreateSkills1696402102013';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "skill" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "UQ_0f49a593960360f6f85b692aca8" UNIQUE ("name"), CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))`);
        await queryRunner.query(`INSERT INTO "skill" ("name", "category") VALUES ('TypeScript', 'Language'), ('CSS', 'Language'), ('React', 'Frontend'), ('Next.js', 'Framework'), ('GraphQL', 'Backend');`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "skill"`);
    }
}
exports.CreateSkills1696402102013 = CreateSkills1696402102013;
//# sourceMappingURL=1696402102013-CreateSkills.js.map