import React from "react";
import Fab from './Fab';
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

interface Props {
  type: string;
}

function AddFab(props: Props) {
  const { type } = props;
  const history = useHistory();

  function handleClick(_: React.MouseEvent) {
    if (!type) return;
    history.push(`/${type}/add`);
  }

  return (
    <Fab
      color="secondary"
      aria-label="add"
      onClick={handleClick}
    >
      <AddIcon />
    </Fab>
  );
}

export default AddFab;
