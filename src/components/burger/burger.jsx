import React from "react";
import UpperBun from "./ingredients/upper_bun";
import './burger.css';
import LowerBun from "./ingredients/lower_bun";
import Bacon from './ingredients/bacon';
import Meat from "./ingredients/meat";
import Lettuce from "./ingredients/lettuce";
import Cheese from "./ingredients/cheese";
function Burger() {
  return (
    <div className="Burger">
      <UpperBun/>
      <Lettuce/>
      <Bacon/>
      <Cheese/>
      <Meat/>
      <LowerBun/>
    </div>
  );
}

export default Burger;