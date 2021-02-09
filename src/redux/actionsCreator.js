import axios from "axios";
import {
  ADD_COMMENT,
  COMMENTS_LOADING,
  DISHES_LOADING,
  FAILED_DISHES,
  LOAD_COMMENTS,
  LOAD_DISHES,
  LOAD_FEEDBACKS,
} from "./actionTypes";
import { baseURL } from "./baseURL";

export const addComment = (dishId, author, rating, comment) => {
  return (dispatch) => {
    const newCommnet = {
      dishId: dishId,
      author: author,
      rating: rating,
      comment: comment,
    };
    newCommnet.date = new Date().toISOString();
    axios
      .post(`${baseURL}/comments`, newCommnet)
      .then((res) => res.data)
      .then((comment) => dispatch(commentConcat(comment)));
  };
};

const commentConcat = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

const loadDishes = (dishes) => {
  return {
    type: LOAD_DISHES,
    payload: dishes,
  };
};

const dishesLoading = () => {
  return { type: DISHES_LOADING };
};

const failedDishes = (errorMsg) => {
  return { type: FAILED_DISHES, payload: errorMsg };
};

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());

    axios
      .get(`${baseURL}/dishes`)
      .then((res) => res.data)
      .then((dishes) => dispatch(loadDishes(dishes)))
      .catch((err) => dispatch(failedDishes(err.message)));
  };
};

const commentsLoading = () => {
  return { type: COMMENTS_LOADING };
};

const loadComments = (comments) => {
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

const loadFeedbacks = (feedbacks) => {
  return { type: LOAD_FEEDBACKS, payload: feedbacks };
};

export const fetchFeedbacks = () => {
  return (dispatch) => {
    axios
      .get(`${baseURL}/feedbacks`)
      .then((res) => res.data)
      .then((feedbacks) => dispatch(loadFeedbacks(feedbacks)));
  };
};
