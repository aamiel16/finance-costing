import React from "react";
import isFn from 'lodash/isFunction';
import Fab from './Fab';
import SaveIcon from "@material-ui/icons/Save";
import BackIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

interface Props {
  dirty?: boolean;
  onSave: () => void;
}

function AddFab(props: Props) {
  const { dirty, onSave } = props;
  const history = useHistory();

  function handleClick(_: React.MouseEvent) {
    if (dirty) {
      isFn(onSave) && onSave();
    } else {
      history.goBack();
    }
  }

  function renderButton() {
    if (dirty) {
      return <SaveIcon />
    }
    return <BackIcon />
  }

  return (
    <Fab
      color="secondary"
      aria-label="add"
      onClick={handleClick}
    >
      {renderButton()}
    </Fab>
  );
}

export default AddFab;
