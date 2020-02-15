import { PouchDoc } from "../common";

export interface Item {
  name: string;
  sku?: string;
  description?: string;
  unit_cost?: string;
}

export type ItemDoc = PouchDoc<Item>;
