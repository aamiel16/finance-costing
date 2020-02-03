import React from "react";
import isFn from 'lodash/isFunction';
import Fab from './Fab';
import SaveIcon from "@material-ui/icons/Save";

interface Props {
  disabled?: boolean;
  onSave: () => void;
}

function SaveFab(props: Props) {
  const { disabled = false, onSave } = props;

  function handleClick(_: React.MouseEvent) {
    if (disabled) return;
    isFn(onSave) && onSave();
  }

  return (
    <Fab
      color="secondary"
      aria-label="add"
      onClick={handleClick}
    >
      <SaveIcon />
    </Fab>
  );
}

export default SaveFab;
