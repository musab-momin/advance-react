import React from "react";
import "./global.css";
import PortalParent from "./components/portals/portal-parent";
import ComponentWithError from "./components/ErrorBoundry/component-with-error";

export default () => (
  <>
    <PortalParent />
    {/* <ComponentWithError /> */}
  </>
);
