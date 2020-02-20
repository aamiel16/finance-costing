import React from "react";
import { RecordListTable } from "../../../components/lists";
import { ShippingMethodDocument } from '../../../services/shippingMethod';
import { useFetchShippingMethodList } from "../../../hooks/shippingMethod";

export function ShippingMethodList() {
  const fetchList = useFetchShippingMethodList();

  return (
    <RecordListTable<ShippingMethodDocument>
      {...fetchList}
      title="Shipping methods"
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
