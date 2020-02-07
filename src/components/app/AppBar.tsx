import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Drawer } from "./Drawer";

export interface AppBarProps {
  title: string;
  children: React.ReactNode;
}

export const AppBar: React.FC<AppBarProps> = props => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiAppBar
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </MuiAppBar>
      <Drawer>
        {children}
      </Drawer>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));
