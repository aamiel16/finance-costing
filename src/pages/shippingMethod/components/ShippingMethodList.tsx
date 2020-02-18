import React from "react";
import { RecordListTable } from "../../../components/lists";
import { ShippingMethodDoc } from '../../../services/shippingMethod';
import { useFetchShippingMethodList } from "../../../hooks/shippingMethod";

export function ShippingMethodList() {
  const fetchList = useFetchShippingMethodList();

  return (
    <RecordListTable<ShippingMethodDoc>
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
