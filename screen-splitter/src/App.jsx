import React from "react";
import SplitScreen from "./components/split-screen";
import "./global.css";

const LeftTitle = () => {
  return <h1>This is left children</h1>;
};

const RightTitle = () => {
  return <h1>This is right children</h1>;
};

export default () => (
  <>
    <SplitScreen leftChildren={<LeftTitle />} rightChildren={<RightTitle />} />
  </>
);
