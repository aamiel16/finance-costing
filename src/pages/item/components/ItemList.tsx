import React from "react";
import ListTable from "../../../components/lists/ListTable";
import { ItemDoc } from "../../../services/item";
import { useFetchItemList } from "../../../hooks/item";

export function ItemList() {
  const {
    rows,
    totalRows,
    loading,
    setPageLimit,
    fetchPrev,
    fetchNext
  } = useFetchItemList();

  return (
    <ListTable<ItemDoc>
      pagination
      loading={loading}
      title="Items"
      rows={rows}
      count={totalRows}
      onPrevPage={fetchPrev}
      onNextPage={fetchNext}
      onRowsPerPageChange={setPageLimit}
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
