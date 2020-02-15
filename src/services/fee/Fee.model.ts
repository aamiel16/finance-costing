import { PouchDoc } from '../common';

export interface Fee {
  name: string;
  description?: string;
}

export type FeeDoc = PouchDoc<Fee>;
