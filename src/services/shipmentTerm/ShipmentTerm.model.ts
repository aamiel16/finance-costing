import { PouchDoc } from "../common";

export interface ShipmentTerm {
  name: string;
  description?: string;
}

export type ShipmentTermDoc = PouchDoc<ShipmentTerm>;
