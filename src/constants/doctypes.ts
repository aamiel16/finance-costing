export const DT_ITEM = "item";
export const DT_FEE = "fee";
export const DT_SHIPMENT_TERM = "shipment-term";
export const DT_SHIPPING_METHOD = "shipping-method";

export type Doctypes =
  | typeof DT_ITEM
  | typeof DT_FEE
  | typeof DT_SHIPMENT_TERM
  | typeof DT_SHIPPING_METHOD;
