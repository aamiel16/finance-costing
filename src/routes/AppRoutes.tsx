import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '@material-ui/icons/Home';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Description from '@material-ui/icons/Description';
import Group from '@material-ui/icons/Group';
import Category from '@material-ui/icons/Category';
import Receipt from '@material-ui/icons/Receipt';
import Subject from '@material-ui/icons/Subject';
import LocalShipping from '@material-ui/icons/LocalShipping';
import HomePage from "../pages/home/HomePage";
import ForexPage from "../pages/forex/ForexPage";
import TransactionPage from "../pages/transaction/TransactionPage";
import SupplierPage from "../pages/supplier/SupplierPage";
import ItemPage from "../pages/item/ItemPage";
import FeePage from "../pages/fee/FeePage";
import ShipmentTermPage from "../pages/shipmentTerm/ShipmentTermPage";
import ShippingMethodPage from "../pages/shippingMethod/ShippingMethodPage";

interface Props {}

export const APP_ROUTES = [
  {
    path: "/forex",
    component: ForexPage,
    title: "Foreign exchanges",
    icon: AttachMoney,
  },
  {
    path: "/transactions",
    component: TransactionPage,
    title: "Transactions",
    icon: Description,
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
    icon: Category
  },
  {
    path: "/fees",
    component: FeePage,
    title: "Fees",
    icon: Receipt
  },
  {
    path: "/shipment-terms",
    component: ShipmentTermPage,
    title: "Shipment terms",
    icon: Subject
  },
  {
    path: "/shipping-methods",
    component: ShippingMethodPage,
    title: "Shipping methods",
    icon: LocalShipping
  },
  {
    path: "/",
    component: HomePage,
    title: "Home",
    icon: Home
  }
];

const AppRoutes = (props: Props) => {
  const renderRoutes = () => {
    return APP_ROUTES.map(({ path, component: Page }) => (
      <Route key={path} path={path}>
        <Page />
      </Route>
    ));
  };

  return (
    <Switch>
      {renderRoutes()}
    </Switch>
  );
};

export default AppRoutes;