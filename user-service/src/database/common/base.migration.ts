import { MigrationInterface, QueryRunner } from 'typeorm';
import { TableForeignKeyOptions } from 'typeorm/schema-builder/options/TableForeignKeyOptions';
import { TableIndexOptions } from 'typeorm/schema-builder/options/TableIndexOptions';

import {
  createForeignKey,
  createIndex,
  dropForeignKey,
  dropIndex,
} from './helper';

export class BaseMigration implements MigrationInterface {
  public tableName = '';
  public foreignKeys: TableForeignKeyOptions[] = [];
  public indexes: TableIndexOptions[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async beforeUp(queryRunner: QueryRunner): Promise<void> {
    // TODO
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async up(queryRunner: QueryRunner): Promise<any> {
    // TODO
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async afterUp(queryRunner: QueryRunner): Promise<void> {
    // TODO
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async beforeDown(queryRunner: QueryRunner): Promise<void> {
    // TODO
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async down(queryRunner: QueryRunner): Promise<any> {
    // TODO
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async afterDown(queryRunner: QueryRunner): Promise<any> {
    // TODO
  }

  protected _getTableName(tableName = '') {
    if (!tableName) {
      tableName = this.tableName;
    }
    return `${process.env.DB_ENTITY_PREFIX || ''}${tableName}`;
  }

  protected async _createForeignKey(queryRunner: QueryRunner): Promise<any> {
    if (!this.foreignKeys.length) {
      return;
    }
    for (const options of this.foreignKeys) {
      await createForeignKey(queryRunner, this._getTableName(), options);
    }
  }

  protected async _dropForeignKey(queryRunner: QueryRunner): Promise<any> {
    if (!this.foreignKeys.length) {
      return;
    }
    for (const options of this.foreignKeys) {
      await dropForeignKey(queryRunner, this._getTableName(), options);
    }
  }

  protected async _createIndex(queryRunner: QueryRunner): Promise<any> {
    if (!this.indexes.length) {
      return;
    }
    for (const options of this.indexes) {
      await createIndex(queryRunner, this._getTableName(), options);
    }
  }

  protected async _dropIndex(queryRunner: QueryRunner): Promise<any> {
    if (!this.indexes.length) {
      return;
    }
    for (const options of this.indexes) {
      await dropIndex(queryRunner, this._getTableName(), options);
    }
  }
}
