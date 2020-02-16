import React from "react";
import { ItemList } from "./components/ItemList";
import { AddFab } from "../../components/buttons/Fab";

interface ItemPageProps {}

export function ItemPage(props: ItemPageProps) {
  return (
    <>
      <AddFab type="items" />
      <ItemList />
    </>
  );
}
