import React, { memo } from "react";

const HeavyComponent = memo(({ keyword }) => {
  const now = performance.now();
  while (now > performance.now() - 400) {
    //artifically slow down component
  }
  console.log(
    "%c ~@@ Header component render: >>> ",
    "background: #222; color: #bada55",
    keyword
  );

  return (
    <div className="p-16">
      <h3>I am heaver component </h3>
      <p>{keyword}</p>
    </div>
  );
});

export default HeavyComponent;
