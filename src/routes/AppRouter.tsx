import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const ROUTES = [
  {
    path: "/",
    component: HomePage
  },
];

const AppRouter = (props: Props) => {
  const { children } = props;

  const renderRoutes = () => {
    return ROUTES.map(({ path, component: Page }) => (
      <Route key={path} path={path}>
        <Page />
      </Route>
    ));
  };

  return (
    <Router>
      {children}
      <Switch>{renderRoutes()}</Switch>
    </Router>
  );
};

export default AppRouter;
