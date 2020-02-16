import React from "react";
import isEmpty from "lodash/isEmpty";
import { Switch, Route } from "react-router-dom";
import Home from "@material-ui/icons/Home";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Description from "@material-ui/icons/Description";
import Group from "@material-ui/icons/Group";
import Category from "@material-ui/icons/Category";
import Receipt from "@material-ui/icons/Receipt";
import Subject from "@material-ui/icons/Subject";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Settings from "@material-ui/icons/SettingsRounded";
import HomePage from "../pages/home/HomePage";
import ForexPage from "../pages/forex/ForexPage";
import TransactionPage from "../pages/transaction/TransactionPage";
import SupplierPage from "../pages/supplier/SupplierPage";
import { ItemPage, ItemAddPage } from "../pages/item";
import { FeePage, FeeAddPage } from "../pages/fee";
import ShipmentTermPage from "../pages/shipmentTerm/ShipmentTermPage";
import ShippingMethodPage from "../pages/shippingMethod/ShippingMethodPage";
import SettingsPage from "../pages/settings/SettingsPage";

interface IRoute {
  path: string;
  component: React.ComponentType<any>;
  title?: string;
  icon?: React.ComponentType;
  routes?: IRoute[];
}

export const APP_ROUTES: IRoute[] = [
  {
    path: "/forex",
    component: ForexPage,
    title: "Foreign exchanges",
    icon: AttachMoney
  },
  {
    path: "/transactions",
    component: TransactionPage,
    title: "Transactions",
    icon: Description
  },
  {
    path: "/suppliers",
    component: SupplierPage,
    title: "Suppliers",
    icon: Group
  },
  {
    path: "/items",
    component: ItemPage,
    title: "Items",
    icon: Category,
    routes: [
      {
        path: "/add",
        component: ItemAddPage
      }
    ]
  },
  {
    path: "/fees",
    component: FeePage,
    title: "Fees",
    icon: Receipt,
    routes: [
      {
        path: "/add",
        component: FeeAddPage
      }
    ]
  },
  {
    path: "/shipping-methods",
    component: ShippingMethodPage,
    title: "Shipping methods",
    icon: LocalShipping
  },
  {
    path: "/shipment-terms",
    component: ShipmentTermPage,
    title: "Shipment terms",
    icon: Subject
  },
  {
    path: "/settings",
    component: SettingsPage,
    title: "Settings",
    icon: Settings
  },
  {
    path: "/",
    component: HomePage,
    title: "Home",
    icon: Home
  }
];

const AppRoutes = () => {
  const renderRoutes = (routesArg: IRoute[], prefix = '') => {
    return routesArg.map(({ path, routes, component: Page }) => {
      if (isEmpty(routes)) {
        return (
          <Route key={path} path={`${prefix}${path}`}>
            <Page />
          </Route>
        );
      }

      return [
        ...renderRoutes(routes, path),
        <Route key={path} path={path}>
          <Page />
        </Route>
      ];
    });
  };

  return <Switch>{renderRoutes(APP_ROUTES)}</Switch>;
};

export default AppRoutes;
