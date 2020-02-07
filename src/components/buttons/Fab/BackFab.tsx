import React from "react";
import BackIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";
import { Fab, FabProps } from './Fab';

export interface BackFabProps {
  fabProps?: FabProps;
}

export function BackFab(props: BackFabProps) {
  const { fabProps = {} } = props;
  const history = useHistory();

  return (
    <Fab
      color="secondary"
      aria-label="add"
      {...fabProps}
      onClick={history.goBack}
    >
      <BackIcon fontSize="large" />
    </Fab>
  );
}
