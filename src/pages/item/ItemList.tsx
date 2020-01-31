import React from "react";
import ListTable from "../../components/lists/ListTable";

interface Item {
  id: string;
  name: string;
  description?: string;
}

const rows = Array(10)
  .fill(null)
  .map((_, idx: number) => ({
    id: String(idx),
    name: `Item # ${idx + 1}`
  }));

function ItemList() {
  return (
    <ListTable<Item>
      pagination
      title="Items"
      keyField="id"
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

export default ItemList;
