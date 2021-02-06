import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";

const dishReducer = (dishState = DISHES, action) => {
  return dishState;
};

const commentReducer = (commentState = COMMENTS, action) => {
  if (action.type === "ADD_COMMENT") {
    let newComment = action.payload;
    newComment.id = commentState.length;
    newComment.date = new Date().toDateString();
    // console.log(newComment);
    return commentState.concat(newComment);
  }
  return commentState;
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
