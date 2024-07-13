import React, { useId, useState } from "react";

/**
 * useId is a react hook which give us quique id and it's main feature is it gives the same id on server and
 * client machine. If your compoent is a server component or it runs on server also and you use Math.random()
 * for unique id then you will hydration error because the id on client will going to be different from server
 * as our component runs on both server and machine we need uique but consistent id. That is way we use useId.
 */

const Form = () => {
  const [email, setEmail] = useState("");

  const id = useId();

  return (
    <form>
      <label htmlFor={id}>Email</label>
      <input
        id={id}
        name="email"
        value={email}
        onChange={(eve) => setEmail(eve.target.value)}
        autoComplete="off"
      />
    </form>
  );
};

export default Form;
