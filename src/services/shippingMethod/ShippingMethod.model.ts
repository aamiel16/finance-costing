import { ToPouchDocument } from "../../types";

export interface ShippingMethod {
  name: string;
  description?: string;
}

export type ShippingMethodDocument = ToPouchDocument<ShippingMethod>;
