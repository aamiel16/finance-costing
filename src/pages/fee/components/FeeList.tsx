import React from "react";
import { RecordListTable } from "../../../components/lists";
import { FeeDoc } from "../../../services/fee";
import { useFetchFeeList } from "../../../hooks/fee";

export function FeeList() {
  const fetchList = useFetchFeeList();

  return (
    <RecordListTable<FeeDoc>
      {...fetchList}
      title="Fees"
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
