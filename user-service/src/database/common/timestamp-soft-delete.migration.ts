import { DefaultMigration } from './default.migration';
import timestampSoftDeleteColumns from './timestamp-soft-delete.column';

export class TimestampSoftDeleteMigration extends DefaultMigration {
  public defaultColumns = timestampSoftDeleteColumns;
}
