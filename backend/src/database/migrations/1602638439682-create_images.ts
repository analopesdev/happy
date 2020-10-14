import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602638439682 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
        columns:[
          {
            name: 'id',
            // Inteiro
            type: 'integer',
            // Aceitar somente numeros positivos
            unsigned: true,
            // Chave primaria
            isPrimary: true,
            // Coluna gerada automaticamente
            isGenerated: true,
            // Coluna gerada automaticamente usando uma lógica incremental
            generationStrategy: 'increment'
          }, 
          {
              name: 'path',
              type: 'varchar',
          },
          {
              name: 'orphanage_id',
              type: 'integer',
          }
        ],
        foreignKeys:[
            {
                name: 'ImageOrphanage',

                // Nome da coluna que vai armazenar o relacionamento
                columnNames:['orphanage_id'],

                // Qual tabela, na tabela de orphanage que ela está relacionamento
                referencedTableName: 'orphanage',

                // Qual coluna, na tabela de orphanage que ela está relacionamento
                referencedColumnNames: ['id'],

                // Qualquer alteração que aconteça no id, também acontece com as imagens
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }
        ] 
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
