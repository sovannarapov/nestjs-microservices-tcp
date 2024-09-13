import { DefaultMigration } from './default.migration';
import timestampColumns from './timestamp.columns';

export class TimestampMigration extends DefaultMigration {
  public defaultColumns = timestampColumns;
}
