import React from 'react';
import ItemList from './ItemList';

interface Props {}

const ItemPage: React.FC<Props> = (props) => {
  return (
    <div>
      <ItemList />
    </div>
  );
}

export default ItemPage;
