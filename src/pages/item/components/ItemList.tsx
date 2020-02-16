import React from "react";
import ListTable from "../../../components/lists/ListTable";
import { ItemDoc } from '../../../services/item';
import { useFetchListItem } from '../../../hooks/item';

export function ItemList() {
  const { rows, totalRows, setPageLimit, fetchPrev, fetchNext } = useFetchListItem();

  return (
    <ListTable<ItemDoc>
      pagination
      title="Items"
      rows={rows}
      count={totalRows}
      onPrevPage={fetchPrev}
      onNextPage={fetchNext}
      onRowsPerPageChange={setPageLimit}
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
