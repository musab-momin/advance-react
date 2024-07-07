import * as React from "react";

const fetchResource = (
  Component: any,
  resourceName: string,
  apiUrl: string
) => {
  return (props: any) => {
    const [resource, setResource] = React.useState();

    React.useEffect(() => {
      (async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setResource(data);
      })();
    }, []);

    return <Component {...{ [resourceName]: resource }} {...props} />;
  };
};

export default fetchResource;
