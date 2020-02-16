import React from "react";
import ListTable from "../../../components/lists/ListTable";
import { ItemDoc } from '../../../services/item';

const rows = Array(50)
  .fill(null)
  .map((_, idx: number) => ({
    _id: String(idx),
    _rev: String(idx),
    name: `Item # ${idx + 1}`
  }));

export function ItemList() {
  return (
    <ListTable<ItemDoc>
      pagination
      title="Items"
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
