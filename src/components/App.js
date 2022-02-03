import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";
import SpicyFoodList from "./SpicyFoodList";
import FoodFilterList from "./FoodFilterList";
import Counter from "./Counter";
import Toggle from "./Toggle";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
      <h3>Toggle</h3>
      <Toggle />
      <h3>Counter</h3>
      <Counter />
      <h3>SpicyFoodList w heatLevel</h3>
      <SpicyFoodList />
      <h3>Food Filter w Li Remove</h3>
      <FoodFilterList />
    </div>
  );
}

export default App;
