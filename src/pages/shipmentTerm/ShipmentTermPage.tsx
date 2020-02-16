import React from "react";
import { ShipmentTermList } from "./components/ShipmentTermList";
import { AddFab } from "../../components/buttons/Fab";
import { ROUTE_SHIPMENT_TERM } from "../../constants";

interface ShipmentTermPageProps {}

export function ShipmentTermPage(props: ShipmentTermPageProps) {
  return (
    <>
      <AddFab type={ROUTE_SHIPMENT_TERM} />
      <ShipmentTermList />
    </>
  );
}
