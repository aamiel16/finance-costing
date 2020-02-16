import { useEffect } from "react";
import { ServiceContainer } from "../../services/common";
import { ItemService } from "../../services/item";
import { FeeService } from "../../services/fee";
import { ShipmentTermService } from "../../services/shipmentTerm";

export function useInitServices() {
  useEffect(() => {
    ServiceContainer.inject(new ItemService());
    ServiceContainer.inject(new FeeService());
    ServiceContainer.inject(new ShipmentTermService());
  }, []);
}
