import React from "react";
import ListTable from "../../../components/lists/ListTable";
import { FeeDoc } from "../../../services/fee";

const rows = Array(50)
  .fill(null)
  .map((_, idx: number) => ({
    _id: String(idx),
    _rev: String(idx),
    name: `Fee # ${idx + 1}`
  }));

export function FeeList() {
  return (
    <ListTable<FeeDoc>
      pagination
      title="Fees"
      rows={rows}
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
