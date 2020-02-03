import React from "react";
import Fab from './Fab';
import BackIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

interface Props {}

function BackFab(_: Props) {
  const history = useHistory();

  return (
    <Fab
      color="secondary"
      aria-label="add"
      onClick={history.goBack}
    >
      <BackIcon fontSize="large" />
    </Fab>
  );
}

export default BackFab;
