import React from "react";
import "./global.css";
import PortalParent from "./components/portals/portal-parent";
import ComponentWithError from "./components/ErrorBoundry/component-with-error";
import Uselayout from "./components/UseLayout";
import Form from "./components/Form";

export default () => (
  <>
    <Form />
    <PortalParent />
    <Form />
    {/* <ComponentWithError /> */}
    {/* <Uselayout /> */}
  </>
);
