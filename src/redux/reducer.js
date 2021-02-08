import { combineReducers } from "redux";
import {
  ADD_COMMENT,
  COMMENTS_LOADING,
  DISHES_LOADING,
  LOAD_COMMENTS,
  LOAD_DISHES,
} from "./actionTypes";
import { createForms } from "react-redux-form";
import { initialContactForm } from "./forms";

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
  switch (action.type) {
    case DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
        dishes: [],
      };
    case LOAD_DISHES:
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload,
      };
    default:
      return dishState;
  }
};

const commentReducer = (
  commentState = { isLoading: false, comments: [] },
  action
) => {
  switch (action.type) {
    case COMMENTS_LOADING:
      return {
        ...commentState,
        isLoading: true,
        comments: [],
      };
    case LOAD_COMMENTS:
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload,
      };
    case ADD_COMMENT:
      let newComment = action.payload;
      newComment.id = commentState.length;
      newComment.date = new Date().toDateString();
      return commentState.concat(newComment);
    default:
      return commentState;
  }
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
  ...createForms({ feedback: initialContactForm }),
});
