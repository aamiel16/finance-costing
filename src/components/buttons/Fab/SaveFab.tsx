import React from "react";
import isFn from 'lodash/isFunction';
import SaveIcon from "@material-ui/icons/Save";
import { Fab, FabProps } from './Fab';

export interface SaveFabProps {
  disabled?: boolean;
  onSave: React.MouseEventHandler;
  fabProps?: FabProps;
}

export function SaveFab(props: SaveFabProps) {
  const { disabled = false, onSave, fabProps = {} } = props;


  function handleClick(e: React.MouseEvent) {
    if (disabled) return;
    isFn(onSave) && onSave(e);
  }

  return (
    <Fab
      color="secondary"
      aria-label="add"
      disabled={disabled}
      {...fabProps}
      onClick={handleClick}
    >
      <SaveIcon />
    </Fab>
  );
}
