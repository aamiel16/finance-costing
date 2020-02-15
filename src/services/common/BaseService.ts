import PouchDB from "pouchdb";
import PouchFind from "pouchdb-find";
import PouchUpsert from "pouchdb-upsert";
import { uuid } from "uuidv4";

PouchDB.plugin(PouchFind);
PouchDB.plugin(PouchUpsert);

export abstract class BaseService<Model> {
  private name: string;
  private db: PouchDB.Database;

  constructor(args: ServiceConstructorArgs) {
    const { name } = args;
    this.name = name;
  }

  protected getDB() {
    try {
      if (!this.db) {
        this.db = new PouchDB(this.name, {
          adapter: "idb",
          auto_compaction: true
        });
      }

      return this.db;
    } catch (e) {
      throw e;
    }
  }

  public async get(id: string, opts?: PouchDB.Core.GetOptions) {
    try {
      const db = this.getDB();
      const doc = await db.get<Model>(id, opts);
      return doc;
    } catch (e) {
      throw e;
    }
  }

  public async upsert(doc: Model & Partial<IdRevisionMeta>) {
    try {
      const db = this.getDB();
      const id = doc._id || `${this.name}::${uuid()}`;
      const updated = await db.upsert(id, () => doc);
      return updated;
    } catch (e) {
      throw e;
    }
  }

  public async delete(id: string) {
    try {
      await this.upsert({ _id: id, _deleted: true } as any);
      return { id, success: true };
    } catch (e) {
      throw e;
    }
  }
}

export type IdRevisionMeta = PouchDB.Core.IdMeta & PouchDB.Core.RevisionIdMeta;
export interface ServiceConstructorArgs {
  name: string;
}
export type PouchDoc<T> = T & IdRevisionMeta;
