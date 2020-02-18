import React from "react";
import { RecordListTable } from "../../../components/lists";
import { ShipmentTermDoc } from "../../../services/shipmentTerm";
import { useFetchShipmentTermList } from "../../../hooks/shipmentTerm";

export function ShipmentTermList() {
  const fetchList = useFetchShipmentTermList();

  return (
    <RecordListTable<ShipmentTermDoc>
      {...fetchList}
      title="Shipment terms"
      columns={[
        {
          id: "name",
          label: "Name"
        },
        {
          id: "description",
          label: "Description"
        }
      ]}
    />
  );
}
