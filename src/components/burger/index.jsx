import React from "react";
import UpperBun from "./ingredients/upper_bun";
import LowerBun from "./ingredients/lower_bun";
import Bacon from "./ingredients/bacon";
import Meat from "./ingredients/meat";
import Lettuce from "./ingredients/lettuce";
import Cheese from "./ingredients/cheese";
import "./burger.css";
import { useSelector } from "react-redux";

const Burger = () => {
  const items = useSelector((state) => state.items.items);
  return (
    <div className="Burger">
      <UpperBun />
      {items.map((item) =>
        Array.from({ length: item.quantity }).map(() => (
          <Ingredient key={item.id} type={item.name} />
        ))
      )}
      <LowerBun />
    </div>
  );
};

const Ingredient = ({ type }) => {
  switch (type) {
    case "lettuce":
      return <Lettuce />;
    case "bacon":
      return <Bacon />;
    case "cheese":
      return <Cheese />;
    case "meat":
      return <Meat />;
    default:
      return null;
  }
};

export default Burger;
