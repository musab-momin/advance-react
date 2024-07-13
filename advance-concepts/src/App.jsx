import React from "react";
import "./global.css";
import PortalParent from "./components/portals/portal-parent";
import ComponentWithError from "./components/error-boundry/component-with-error";
import Uselayout from "./components/use-layout";
import Form from "./components/form";
import UseDeferred from "./components/use-deferred";
import UseTransition from "./components/use-transition";

export default () => (
  <>
    {/* <Form /> */}
    {/* <PortalParent /> */}
    {/* <Form /> */}
    {/* <ComponentWithError /> */}
    {/* <Uselayout /> */}
    {/* <UseDeferred /> */}
    <UseTransition />
  </>
);
