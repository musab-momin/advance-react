import Ingredients from "./components/ingredients";
import IngredientsInfoHelper from "./components/ingredients-info-helper";
import MouseTracker from "./components/mouse-tracker";
import SearchMeal from "./components/search-meal";

import "./global.css";

function App() {
  return (
    <>
      {/* <Ingredients ingredientsInfoHelper={<IngredientsInfoHelper />} /> */}

      {/* Below Component is for Throttling */}
      {/* <MouseTracker /> */}

      {/* Below Component is for Debounce */}
      <SearchMeal />
    </>
  );
}

export default App;
