import React from "react";
import ListTable from "../../../components/lists/ListTable";
import { ShippingMethod } from '../../../services/shippingMethod';

const rows = Array(50)
  .fill(null)
  .map((_, idx: number) => ({
    _id: String(idx),
    _rev: String(idx),
    name: `Shipping method # ${idx + 1}`
  }));

export function ShippingMethodList() {
  return (
    <ListTable<ShippingMethod>
      pagination
      title="Shipping methods"
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
