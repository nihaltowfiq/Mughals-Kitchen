import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  sample: "Hello World",
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "ADD_COMMENT") {
    let newComment = action.payload;
    newComment.id = state.comments.length;
    newComment.date = new Date().toDateString();
    // console.log(newComment);
    return {
      ...state,
      comments: state.comments.concat(newComment),
    };
  }
  return state;
};
