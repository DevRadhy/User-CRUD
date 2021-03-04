import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1614792098094 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "ceps",
      columns: [
        {
          name: "id",
          type: "integer",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "cep",
          type: "varchar",
        },
      ]
    }));

    // Cria a tabela de Cidades
    await queryRunner.createTable(new Table({
      name: "cities",
      columns: [
        {
          name: "id",
          type: "integer",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "city",
          type: "varchar",
        },
      ]
    }));

    // Cria a tabela de Estados
    await queryRunner.createTable(new Table({
      name: "states",
      columns: [
        {
          name: "id",
          type: "integer",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "state",
          type: "varchar",
        }
      ]
    }));

    // Cria a tabela de Endereçoes
    await queryRunner.createTable(new Table({
      name: "addresses",
      columns: [
        {
          name: "user_id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "address",
          type: "varchar",
        },
        {
          name: "number",
          type: "integer",
          isNullable: true,
        },
        {
          name: "complement",
          type: "varchar",
        },
        {
          name: "cep_id",
          type: "integer",
        },
        {
          name: "city_id",
          type: "integer",
        },
        {
          name: "state_id",
          type: "integer",
        }
      ],
      foreignKeys: [
        {
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        {
          columnNames: ['cep_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'ceps',
        },
        {
          columnNames: ['city_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'cities',
        },
        {
          columnNames: ['state_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'states',
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses');
    await queryRunner.dropTable('ceps');
    await queryRunner.dropTable('cities');
    await queryRunner.dropTable('states');
  }

}
