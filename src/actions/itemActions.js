import { createAction } from "@reduxjs/toolkit";

export const incrementIngredient = createAction("items/incrementIngredient");
export const decrementIngredient = createAction("items/decrementIngredient");
export const resetState = createAction("items/resetState");
