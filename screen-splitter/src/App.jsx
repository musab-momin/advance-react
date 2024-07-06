import React from "react";
import SplitScreen from "./components/split-screen";
import "./global.css";

const LeftTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

const RightTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

export default () => (
  <>
    <SplitScreen>
      <LeftTitle title={"Left side of layout"} />
      <RightTitle title={"Right side of layout"} />
    </SplitScreen>
  </>
);
