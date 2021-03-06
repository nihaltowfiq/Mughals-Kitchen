import React from "react";
import dateFormat from "dateformat";
import Loading from "./Loading";

const LoadComments = ({ comments, commentsIsLoading }) => {
  if (commentsIsLoading) {
    return <Loading />;
  } else {
    return comments.map((comment) => {
      return (
        <div key={comment.id}>
          <h6 className="mt-1">{comment.author}</h6>
          <p className="my-0">{comment.comment}</p>
          <p className="my-0">Rating: {comment.rating}</p>
          <small>
            {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}
          </small>
          <hr />
        </div>
      );
    });
  }
};

export default LoadComments;
