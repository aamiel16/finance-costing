import React from "react";
import clsx from 'clsx';
import MuiFab, { FabProps } from "@material-ui/core/Fab";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

interface Props extends FabProps {}

function Fab(props: Props) {
  const { className, children, ...fabProps } = props;
  const classes = useStyles();

  return (
    <MuiFab
      color="secondary"
      aria-label="add"
      className={clsx(classes.fab, className)}
      {...fabProps}
    >
      {children}
    </MuiFab>
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

export default Fab;
