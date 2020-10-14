import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602621441386 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Realizar alterações
    // Criar uma tabela, Criar um novo campo, Deletar algum campo
    await queryRunner.createTable(new Table({ 
        name: 'orphanages',
        columns:[
          {
            name: 'id',
            type: 'integer',
            // Aceitar somente números positivos
            unsigned: true,
            // Chave primaria
            isPrimary: true,
            // Coluna gerada automaticamente
            isGenerated: true,
            // Coluna gerada automaticamente usando uma lógica incremental
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision:2
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision:2
          },
          {
            name: 'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'opening_hours',
            type: 'varchar',
          },

          {
            name: 'open_on_weekends',
            type: 'boolean',
            // Padrão false
            default: false
          }
        ]
      }
    ))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Desfazer o que foi feito no método up
    await queryRunner.dropTable('orphanages')
  }

}
