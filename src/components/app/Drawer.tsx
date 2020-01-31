import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { default as MuiDrawer } from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Metrics } from "../../constants";
import { APP_ROUTES } from "../../routes/AppRoutes";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<Props> = props => {
  const { onClose, isOpen, children } = props;
  const classes = useStyles();

  const renderNavigation = () => {
    return APP_ROUTES.reduce(
      (agg: React.ReactNode[], { path, title, icon: Icon }) => {
        const item = (
          <ListItem
            key={path}
            button
            className={classes.menuItem}
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
    <div className={classes.root}>
      <CssBaseline />
      <MuiDrawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{renderNavigation()}</List>
      </MuiDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: Metrics.drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: Metrics.drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  menuItem: {
    paddingLeft: theme.spacing(3)
  },
  selected: {
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  }
}));
export default Drawer;
