import React from "react";
import { RecordListTable } from "../../../components/lists";
import { FeeDocument } from "../../../services/fee";
import { useFetchFeeList } from "../../../hooks/fee";

export function FeeList() {
  const fetchList = useFetchFeeList();

  return (
    <RecordListTable<FeeDocument>
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
