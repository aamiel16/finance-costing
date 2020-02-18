import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBar } from "./components/app/AppBar";
import { initServices } from "./services";
import AppRoutes from "./routes/AppRoutes";

interface AppProps {}

export default class App extends Component {
  constructor(props: AppProps) {
    super(props);
    initServices();
  }

  render() {
    return (
      <Router>
        <AppBar title="Finance Costing">
          <AppRoutes />
        </AppBar>
      </Router>
    );
  }
}
