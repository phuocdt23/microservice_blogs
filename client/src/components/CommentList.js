import React from "react";
const CommentList = ({ comments }) => {

  if (comments.length === 0) {
    return <div>No comments yet</div>
  }
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
}
export default CommentList;