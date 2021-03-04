import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1614792077747 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Cria a tebela de Etnias
    await queryRunner.createTable(new Table({
      name: "ethnicities",
      columns: [
        {
          name: "id",
          type: "integer",
          isPrimary: true,
          isUnique: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: "ethnicity",
          type: "varchar"
        }
      ]
    }));

    // Popula a tabela com as Etnias brasileiras mais comuns
    await queryRunner.query(
      "INSERT INTO ethnicities (ethnicity) VALUES ('Brancos'), ('Pardos'), ('Pretos'), ('Amarelos'), ('Indígenas'), ('Outros')"
      );

    // Cria a tabela de Usuários
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
          isUnique: true,
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "age",
          type: "integer",
        },
        {
          name: "email",
          type: "varchar",
        },
        {
          name: "phone",
          type: "varchar"
        },
        {
          name: "weight",
          type: "float",
        },
        {
          name: "ethnicity_id",
          type: "integer",
        }
      ],
      foreignKeys: [
        {
          columnNames: [ 'ethnicity_id' ],
          referencedColumnNames: [ 'id' ],
          referencedTableName: 'ethnicities',
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
    await queryRunner.dropTable('ethnicities');
  }

}
