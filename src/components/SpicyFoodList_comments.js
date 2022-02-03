//

import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })
  
  function handleSelection(event){
    setFilterBy(event.target.value);
  }

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    // console.log(newFood);

    // [...] spread operator make a copy of our foods array, and insert each element into a new array
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)

  }

  //.filter creating a new array that has all the original elements, except the one we want removed.
  // function handleLiClick(id) {
  //   const newFoodArray = foods.filter((food) => food.id !==id )
  //   setFoods(newFoodArray)
  // }

  //.map creating a new array (with the same length as original array) that has all the elements from the original array, with one element updated
  //.map will iterate through the array and return a new array
  // Whatever value is returned by the callback function that we pass to .map will be added to this new array
  // If the ID of the food we're iterating over matches the ID of the food we're updating, return a new food object with the heat level incremented by 1
  // Otherwise, return the original food object
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
  
  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={() => handleLiClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleSelection}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>

  );
}

export default SpicyFoodList;
