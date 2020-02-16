import { useEffect } from "react";
import { ItemService } from "../../services/item";
import { FeeService } from "../../services/fee";
import { ServiceContainer } from "../../services/common";

export function useInitServices() {
  useEffect(() => {
    ServiceContainer.inject(new ItemService());
    ServiceContainer.inject(new FeeService());
  }, []);
}
