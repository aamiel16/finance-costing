export const ROUTE_ITEM = "items";
export const ROUTE_FEE = "fees";
export const ROUTE_SHIPMENT_TERM = "shipment-terms";
export const ROUTE_SHIPPING_METHOD = "shipping-methods";

export type Route =
  | typeof ROUTE_ITEM
  | typeof ROUTE_FEE
  | typeof ROUTE_SHIPMENT_TERM
  | typeof ROUTE_SHIPPING_METHOD;
