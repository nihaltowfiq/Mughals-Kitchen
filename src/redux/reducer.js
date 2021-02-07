import COMMENTS from "../data/comments";
import { combineReducers } from "redux";
import { ADD_COMMENT, DISHES_LOADING, LOAD_DISHES } from "./actionTypes";

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

const commentReducer = (commentState = COMMENTS, action) => {
  switch (action.type) {
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
});
