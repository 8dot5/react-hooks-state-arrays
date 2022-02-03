
import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function FoodFilterList() {
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

    // make a copy of our foods array, and insert each element into a new array. We're also adding the newly generated food returned by the getNewSpicyFood function at the end of the array.
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)
  }

  //.filter creates a new array that has all the original elements, except the one we want removed.
  // callback function in .filter to look for all foods except the number we're trying to remove, we'll get back a new, shortened list of foods
  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !==id )
    setFoods(newFoodArray)
  }

  // .map method: updates items in array by creating a new array.
  // here its removing items in the <li> using the id
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

export default FoodFilterList;
