import { PouchDoc } from "../common";

export interface ShippingMethod {
  name: string;
  description?: string;
}

export type ShippingMethodDoc = PouchDoc<ShippingMethod>;
