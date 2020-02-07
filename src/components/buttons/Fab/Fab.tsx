import React from "react";
import clsx from 'clsx';
import MuiFab, { FabProps as MuiFabProps } from "@material-ui/core/Fab";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export interface FabProps extends MuiFabProps {}

export function Fab(props: FabProps) {
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
