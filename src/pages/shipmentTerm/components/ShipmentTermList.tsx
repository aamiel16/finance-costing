import React from "react";
import ListTable from "../../../components/lists/ListTable";
import { ShipmentTermDoc } from '../../../services/shipmentTerm';

const rows = Array(50)
  .fill(null)
  .map((_, idx: number) => ({
    _id: String(idx),
    _rev: String(idx),
    name: `Shipment term # ${idx + 1}`
  }));

export function ShipmentTermList() {
  return (
    <ListTable<ShipmentTermDoc>
      pagination
      title="Shipment terms"
      rows={rows}
      columns={[
        {
          id: "name",
          label: "Name",
        },
        {
          id: "description",
          label: "Description"
        }
      ]}
    />
  );
}
