import React from "react";
import ItemList from "./components/ItemList";
import AddFab from "../../components/buttons/AddFab";

interface Props {}

const ItemPage: React.FC<Props> = props => {
  return (
    <>
      <AddFab type='items' />
      <ItemList />
    </>
  );
};

export default ItemPage;
