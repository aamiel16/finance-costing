import React, { MouseEvent } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

interface Props {
  type: string;
}

function AddFab(props: Props) {
  const { type } = props;

  const classes = useStyles();
  const history = useHistory();

  function handleClick(e: MouseEvent) {
    if (!type) return;
    history.push(`/${type}/add`);
  }

  return (
    <Fab
      color="secondary"
      aria-label="add"
      className={classes.fab}
      onClick={handleClick}
    >
      <AddIcon />
    </Fab>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      zIndex: theme.zIndex.drawer + 1,
      top: theme.spacing(4),
      right: theme.spacing(3),
      position: "fixed"
    }
  })
);

export default AddFab;
