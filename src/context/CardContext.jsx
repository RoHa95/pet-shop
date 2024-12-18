import React, { createContext, useContext, useReducer } from "react";
import { sumProducts,sumLikedProducts } from "../helper/helper";

const initialState = {
  selectedItems: [],
  likedItems:[],
  itemsCounter: 0,
  likesCounter:0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        ...sumProducts(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    case "INCREASE":
      const addIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[addIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "DECREASE":
      const decIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        ...state,
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "LIKE_ITEM":
      if (!state.likedItems.find((item) => item.id === action.payload.id)) {
        state.likedItems.push({ ...action.payload, liked: true });
      }
      return {
        ...state,
        ...sumLikedProducts(state.likedItems)
      };
    case "UNLIKE_ITEM":
      const newLikeItems = state.likedItems.filter(
        (item) => item.id !== action.payload.id
      );
      const unlikeIndex = state.likedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.likedItems[unlikeIndex].liked= false;
      return {
        ...state,
        likedItems: [...newLikeItems],
        ...sumLikedProducts(newLikeItems)
      };
    default:
      throw new Error("Invalid Action");
  }
};
const CardContext = createContext();

function CardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
}

const useCard = () => {
  const { state, dispatch } = useContext(CardContext);
  return [state, dispatch];
};
export { useCard };
export default CardProvider;
