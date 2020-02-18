import React from "react";
import { RecordListTable } from "../../../components/lists";
import { ItemDoc } from "../../../services/item";
import { useFetchItemList } from "../../../hooks/item";

export function ItemList() {
  const fetchList = useFetchItemList();

  return (
    <RecordListTable<ItemDoc>
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
