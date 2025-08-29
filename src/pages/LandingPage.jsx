import React from "react";
import PostForm from "../components/PostForm";
import Post from "../components/Post";

function LandingPage({ posts, setPosts }) {
  return (
    <div className="posts-list">
      <PostForm setPosts={setPosts} />
      {posts.map((post, index) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}

export default LandingPage;
