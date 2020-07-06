import PouchDB from "pouchdb";
import PouchFind from "pouchdb-find";
import PouchUpsert from "pouchdb-upsert";
import { ObjectSchema } from 'yup';
import map from "lodash/map";
import replace from "lodash/replace";
import { uuid } from "uuidv4";
import { IdRevisionMeta } from "../../types";

PouchDB.plugin(PouchFind);
PouchDB.plugin(PouchUpsert);

export abstract class BaseService<Model = any> {
  public readonly name: string;
  public readonly prefix: string;
  public readonly schema: ObjectSchema;
  public readonly db: PouchDB.Database;

  constructor(args: ServiceConstructorArgs) {
    const { name, schema } = args;
    this.name = name;
    this.schema = schema;
    this.prefix = `${this.name}::`;
    this.db = new PouchDB(this.name, {
      adapter: "idb",
      auto_compaction: true
    });
  }

  public async get(id: string, opts?: PouchDB.Core.GetOptions) {
    try {
      const doc = await this.db.get<Model>(id, opts);
      return doc;
    } catch (e) {
      throw e;
    }
  }

  public async upsert(doc: Model & Partial<IdRevisionMeta>) {
    try {
      const id = doc._id || this.addIdPrefix(uuid());
      await this.schema.validate({});
      const { rev } = await this.db.upsert(id, () => doc);
      return {
        ...doc,
        _id: id,
        _rev: rev,
      };
    } catch (e) {
      console.log('upsert e: ', e);
      throw e;
    }
  }

  public async delete(id: string) {
    try {
      await this.db.upsert(id, () => ({ _id: id, _deleted: true }));
      return { _id: id, success: true };
    } catch (e) {
      throw e;
    }
  }

  public async getList(pagination: {
    limit: number;
    cursor?: string;
    descending?: boolean;
  }): Promise<{ rows: Model[]; totalRows: number; cursor: string }> {
    try {
      const { cursor, limit, descending = false } = pagination;
      const key = cursor || `${this.name}::`;
      const { total_rows, rows } = await this.db.allDocs({
        descending,
        include_docs: true,
        inclusive_end: true,
        limit: limit + 1,
        startkey: key
      });

      if (descending) {
        rows.reverse();
      }

      return {
        totalRows: total_rows,
        cursor: rows.length ? rows[rows.length - 1].id : "",
        rows: map(rows.slice(0, limit), "doc") as any
      };
    } catch (e) {
      throw e;
    }
  }

  public addIdPrefix(_id: string) {
    return `${this.prefix}${_id}`;
  }

  public removeIdPrefix(_id: string) {
    return replace(_id, this.prefix, '');
  }
}

export interface ServiceConstructorArgs {
  name: string;
  schema?: ObjectSchema;
}
