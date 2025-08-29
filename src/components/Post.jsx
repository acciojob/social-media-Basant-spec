import React from "react";
import { Link } from "react-router-dom";
import ReactionButtons from "./ReactionButtons";

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <small>by {post.author}</small>
      <br />
      <Link to={`/posts/${post.id}`}>
        <button className="button">View Post</button>
      </Link>
      <ReactionButtons post={post} />
    </div>
  );
}

export default Post;
