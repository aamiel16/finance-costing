import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { Fab, FabProps } from './Fab';

export interface AddFabProps {
  type: string;
  fabProps?: FabProps;
}

export function AddFab(props: AddFabProps) {
  const { type, fabProps = {} } = props;
  const history = useHistory();

  function handleClick(_: React.MouseEvent) {
    if (!type) return;
    history.push(`/${type}/add`);
  }

  return (
    <Fab
      color="secondary"
      aria-label="add"
      {...fabProps}
      onClick={handleClick}
    >
      <AddIcon />
    </Fab>
  );
}
