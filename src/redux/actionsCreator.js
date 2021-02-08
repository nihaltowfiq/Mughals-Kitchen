import axios from "axios";
import { ADD_COMMENT, DISHES_LOADING, LOAD_DISHES } from "./actionTypes";
import { baseURL } from "./baseURL";

export const addComment = (dishId, author, rating, comment) => {
  return {
    type: ADD_COMMENT,
    payload: {
      dishId: dishId,
      author: author,
      rating: rating,
      comment: comment,
    },
  };
};

export const loadDishes = (dishes) => {
  return {
    type: LOAD_DISHES,
    payload: dishes,
  };
};

export const dishesLoading = () => {
  return { type: DISHES_LOADING };
};

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());

    axios
      .get(`${baseURL}/dishes`)
      .then((res) => res.data)
      .then((dishes) => dispatch(loadDishes(dishes)));
  };
};
