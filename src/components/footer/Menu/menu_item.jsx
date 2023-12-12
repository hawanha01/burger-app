import React, { useEffect } from "react";
import "./menu.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalPrice } from "../../../actions/priceActions";
import {
  decrementIngredient,
  incrementIngredient,
} from "../../../actions/itemActions";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    dispatch(updateTotalPrice({ items }));
  });
  return (
    <div className="MenuItem">
      <div className="item">
        <strong>{item.name}</strong>
      </div>
      <div className="item">
        <button onClick={() => dispatch(decrementIngredient(item))}>
          Less
        </button>
      </div>
      <div className="item">
        <button onClick={() => dispatch(incrementIngredient(item))}>
          More
        </button>
      </div>
    </div>
  );
};
export default MenuItem;
