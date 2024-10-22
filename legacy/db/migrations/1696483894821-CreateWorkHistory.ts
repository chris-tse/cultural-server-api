import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateWorkHistory1696483894821 implements MigrationInterface {
  name = 'CreateWorkHistory1696483894821';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "work_history" ("id" SERIAL NOT NULL, \
"company" character varying NOT NULL, \
"position" character varying NOT NULL, \
"startDate" date NOT NULL, \
"endDate" date, \
"description" character varying NOT NULL, \
CONSTRAINT "PK_0c1d1173396df573362f803108d" PRIMARY KEY ("id"));`,
    );

    await queryRunner.query(
      `INSERT INTO "work_history" ("company", "position", "startDate", "endDate", "description") \
VALUES ('a la mode, inc.', 'Web Developer Intern', '2014-05-15', '2015-09-15', 'Designed and implemented 10 mobile-friendly responsive web page templates using HTML5, CSS3, and Bootstrap 3 to be upgraded from legacy Flash-based layouts.'), \
('University of Electro-Communications', 'Website Developer', '2015-07-15', '2016-03-15', 'Designed and created a website for an international conference on teaching ESL to provide useful information and handle conference registration.'), \
('Tom Love Innovation Hub', 'Lead Developer', '2018-02-15', '2018-12-15', 'Created the SBIR Connector platform to make it easier for businesses to locate SBIR grant programs. I broke down project requirements into tasks, enforced good practices, and set up staging/production environments on AWS.'), \
('Oracle Netsuite', 'Software Engineer', '2019-03-15', '2021-04-15', 'Enhance the user experience with Netsuite''s Site Management Tools by creating React components capable of handling enterprise-level data. I work closely with designers to workshop and iterate on the UX of components and contribute to technical design documents of release features.'), \
('Rent.', 'Software Engineer', '2021-04-15', NULL, 'Increased lead conversion by 10% by optimizing search and sort through frontend metrics collection and implemented ML-based sort systems via Search.io pipelines. Contributed to leading efforts in rewriting legacy React apps into Next.js.');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "work_history"`);
  }
}
