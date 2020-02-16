import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBar } from "./components/app/AppBar";
import AppRoutes from "./routes/AppRoutes";
import { useInitServices } from "./hooks/init/useInitServices";

export default function App() {
  useInitServices();

  return (
    <Router>
      <AppBar title="Finance Costing">
        <AppRoutes />
      </AppBar>
    </Router>
  );
}
