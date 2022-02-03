import React from "react";
import SpicyFoodList from "./SpicyFoodList";
import FoodFilterList from "./FoodFilterList";
import Counter from "./Counter";
import Toggle from "./Toggle";

function App() {
  return (
    <div>
      <h3>Toggle</h3>
      <Toggle />
      <h3>Counter</h3>
      <Counter />
      <h3>SpicyFoodList</h3>
      <SpicyFoodList />
      <h3>Food Filter</h3>
      <FoodFilterList />
    </div>
  );
}

export default App;
