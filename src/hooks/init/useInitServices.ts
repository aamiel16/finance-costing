import { useEffect } from "react";
import { ServiceContainer } from "../../services/common";
import { ItemService } from "../../services/item";
import { FeeService } from "../../services/fee";
import { ShipmentTermService } from "../../services/shipmentTerm";
import { ShippingMethodService } from "../../services/shippingMethod";

export function useInitServices() {
  useEffect(() => {
    ServiceContainer.inject(new ItemService());
    ServiceContainer.inject(new FeeService());
    ServiceContainer.inject(new ShipmentTermService());
    ServiceContainer.inject(new ShippingMethodService());
  }, []);
}
