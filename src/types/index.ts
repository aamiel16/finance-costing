import { ObjectSchema } from 'yup';

export type ToPouchDocument<T> = T & Partial<IdRevisionMeta>;
export type ExtractYupSchema<YupSchema> = YupSchema extends ObjectSchema<infer Model> ? Partial<Model> : YupSchema;
export type IdRevisionMeta = PouchDB.Core.IdMeta & PouchDB.Core.RevisionIdMeta;
