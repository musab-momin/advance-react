import React from "react";
import "./global.css";
import PortalParent from "./components/portals/portal-parent";
import ComponentWithError from "./components/ErrorBoundry/component-with-error";
import Uselayout from "./components/UseLayout";
import Form from "./components/Form";
import UseDeferred from "./components/UseDeffered";

export default () => (
  <>
    {/* <Form /> */}
    {/* <PortalParent /> */}
    {/* <Form /> */}
    {/* <ComponentWithError /> */}
    {/* <Uselayout /> */}
    <UseDeferred />
  </>
);
