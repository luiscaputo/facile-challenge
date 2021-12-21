import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class encript1639897927117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "encriptedSentenses",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar(250)",
            isNullable: false,
          },
          {
            name: "encripted_name",
            type: "varchar(500)",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "datetime",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "datetime",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sentensesEncripteds");
  }
}
