import React, { useDeferredValue, useState } from "react";
import HeavyComponent from "./heavy-component";

/**
 * useDeferred hook is used to optimse performance of a component. It takes the state as input and delayed the
 * the reading of state or lower its priority. consider a situation where bunch of hooks are in your component
 * and you are passing one of the hook to a children component and that children component is a heavey component
 * or does the job which cause the delay as the props changes chileren component will going to render and
 * cause performance issues. useDeffered can be useful in such scenarios because it will lower the priority
 * of the state reading, in other words it will going to read the state when all the state updates has been
 * done.
 */

const UseDeferred = () => {
  const [keyword, setKeyword] = useState("");
  const deferredKeyword = useDeferredValue(keyword);

  console.log("~@@ parent render: >>>", keyword);

  return (
    <div className="container p-16">
      <input
        type="tex"
        value={keyword}
        onChange={(eve) => setKeyword(eve.target.value)}
      />
      <HeavyComponent keyword={deferredKeyword} />
    </div>
  );
};

export default UseDeferred;
