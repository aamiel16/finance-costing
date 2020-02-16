import React from "react";
import { ShippingMethodList } from "./components/ShippingMethodList";
import { AddFab } from "../../components/buttons/Fab";
import { ROUTE_SHIPPING_METHOD } from "../../constants";

interface ShippingMethodPageProps {}

export function ShippingMethodPage(props: ShippingMethodPageProps) {
  return (
    <>
      <AddFab type={ROUTE_SHIPPING_METHOD} />
      <ShippingMethodList />
    </>
  );
}
