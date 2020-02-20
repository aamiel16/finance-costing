import { ToPouchDocument } from "../../types";

export interface ShipmentTerm {
  name: string;
  description?: string;
}

export type ShipmentTermDocument = ToPouchDocument<ShipmentTerm>;
