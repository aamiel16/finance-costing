import React from "react";
import { RecordListTable } from "../../../components/lists";
import { ItemDocument } from "../../../services/item";
import { useFetchItemList } from "../../../hooks/item";

export function ItemList() {
  const fetchList = useFetchItemList();

  return (
    <RecordListTable<ItemDocument>
      {...fetchList}
      title="Items"
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
