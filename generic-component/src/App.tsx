import { ReactNode } from "react";
import { Popup } from "./components/popup";

interface ProductListProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const ProductList = <T,>(props: ProductListProps<T>) => {
  return <ul>{props.rows.map((row) => props.renderRow(row))}</ul>;
};

const products = [
  {
    id: 1,
    title: "product",
  },
];

function App() {
  return (
    <div>
      <ProductList rows={products} renderRow={(row) => <li>{row.title}</li>} />
      {/* <ProductList
        rows={products}
        renderRow={(row) => {
          return <li>{row.nonExistingProp}</li>;
        }}
      ></ProductList> */}

      <Popup
        isOpen
        variant="with-controls"
        label="Click Me!"
        onClick={() => {}}
      ></Popup>
      <Popup isOpen variant="no-controls"></Popup>
    </div>
  );
}

export default App;
