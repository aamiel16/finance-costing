import { ServiceContainer } from "./common";
import { ItemService } from "./item";
import { FeeService } from "./fee";
import { ShipmentTermService } from "./shipmentTerm";
import { ShippingMethodService } from "./shippingMethod";

export function initServices() {
  ServiceContainer.inject(new ItemService());
  ServiceContainer.inject(new FeeService());
  ServiceContainer.inject(new ShipmentTermService());
  ServiceContainer.inject(new ShippingMethodService());
}
