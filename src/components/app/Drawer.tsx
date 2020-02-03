import React from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { default as MuiDrawer } from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Metrics } from "../../constants";
import { APP_ROUTES } from "../../routes/AppRoutes";

interface Props {
  children: React.ReactNode;
}

const Drawer: React.FC<Props> = props => {
  const { children } = props;
  const classes = useStyles();

  const renderNavigation = () => {
    return APP_ROUTES.reduce(
      (agg: React.ReactNode[], { path, title, icon: Icon }) => {
        const item = (
          <ListItem
            key={path}
            button
            exact
            to={path}
            component={NavLink}
            activeClassName={classes.selected}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        );

        if (path === "/") {
          return [item, ...agg];
        }

        return agg.concat(item);
      },
      []
    );
  };

  return (
    <>
      <MuiDrawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>{renderNavigation()}</List>
      </MuiDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      width: Metrics.drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: Metrics.drawerWidth
    },
    content: {
      flexGrow: 1,
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2)
      },
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3)
      }
    },
    selected: {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    },
    toolbar: theme.mixins.toolbar as CSSProperties
  })
);

export default Drawer;
