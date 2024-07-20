import React, { useEffect, useState } from "react";
import mealsPromsie from "../utils/meals-promise";

const SearchMeal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearch = (eve) => {
    setSearchQuery(eve.target.value);
  };

  useEffect(() => {
    const fetchMeals = async () => {
      const { isSuccess, message } = await mealsPromsie(searchQuery);

      if (isSuccess) {
        setMeals(message);
      } else {
        setMeals(null);
      }
    };

    fetchMeals();
  }, [searchQuery]);

  return (
    <div className="container p-16">
      <input
        name="meal"
        placeholder="search for meal..."
        className="p-8"
        autoComplete="off"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul className="container p-16">
        {!meals.length ? (
          <p>TRY TO SEARCH INDIAN CUISINE</p>
        ) : (
          meals.map((meal, _indx) => <li key={meal.id}>{meal.name}</li>)
        )}
      </ul>
    </div>
  );
};

export default SearchMeal;
