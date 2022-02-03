import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    // console.log(newFood);

    // make a copy of our foods array, and insert each element into a new array. We're also adding the newly generated food returned by the getNewSpicyFood function at the end of the array.
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)
  }

  // .map method: updates items in array by creating a new array.
  // here its applying modifications to the food.heatLevel
  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }
  
  // .map method: updates items in array by creating a new array.
  // here its grabbing the food.id which will be used to update the food.heatLevel
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;