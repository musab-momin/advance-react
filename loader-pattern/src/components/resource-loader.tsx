import * as React from "react";

const ResourceLoader = ({
  children,
  fetchFunction,
  resourceName,
}: {
  children: React.ReactNode;
  fetchFunction: () => any;
  resourceName: string;
}) => {
  const [resource, setResource] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await fetchFunction();
      setResource(data);
    })();
  }, []);

  return (
    <>
      {React.Children?.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            [resourceName]: resource,
          });
        }
        return child;
      })}
    </>
  );
};

export default ResourceLoader;
