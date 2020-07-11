import { MongoClient, Db } from 'mongodb';

import { DB_URI, DB_NAME } from './secrets';

class Database {
  client: MongoClient | undefined | void;

  database: Db | undefined | void;

  public readonly init = async (): Promise<void> => {
    this.client = await MongoClient.connect(DB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.database = this.client.db(DB_NAME);
  };
}

const db = new Database();
export default db;
