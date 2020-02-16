import React from "react";
import { FeeList } from "./components/FeeList";
import { AddFab } from "../../components/buttons/Fab";

interface FeePageProps {}

export function FeePage(props: FeePageProps) {
  return (
    <>
      <AddFab type="fees" />
      <FeeList />
    </>
  );
}
