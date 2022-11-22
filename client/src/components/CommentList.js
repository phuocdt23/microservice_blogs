import React, { useEffect, useState } from "react";
import axios from "axios";
const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  if (comments.length === 0) {
    return <div>No comments yet</div>
  }
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
}
export default CommentList;