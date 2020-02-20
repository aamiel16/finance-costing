import { ToPouchDocument } from '../../types';

export interface Fee {
  name: string;
  description?: string;
}

export type FeeDocument = ToPouchDocument<Fee>;
