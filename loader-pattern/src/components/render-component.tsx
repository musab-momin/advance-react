import * as React from "react";

const RenderComponent = ({
  fetcherFunction,
  renderComponent,
}: {
  fetcherFunction: () => any;
  renderComponent: (data: any) => React.ReactElement;
}) => {
  const [resource, setResource] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await fetcherFunction();
      setResource(data);
    })();
  }, []);

  return renderComponent(resource);
};

export default RenderComponent;
