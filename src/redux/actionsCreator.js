import axios from "axios";
import {
  ADD_COMMENT,
  COMMENTS_LOADING,
  DISHES_LOADING,
  LOAD_COMMENTS,
  LOAD_DISHES,
} from "./actionTypes";
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

export const commentsLoading = () => {
  return { type: COMMENTS_LOADING };
};

export const loadComments = (comments) => {
  return { type: LOAD_COMMENTS, payload: comments };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(commentsLoading());

    axios
      .get(`${baseURL}/comments`)
      .then((res) => res.data)
      .then((comments) => dispatch(loadComments(comments)));
  };
};
