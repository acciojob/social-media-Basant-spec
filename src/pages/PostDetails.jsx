import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function PostDetails({ posts, setPosts }) {
  const { id } = useParams();
  const history = useHistory();
  const post = posts.find((p) => p.id.toString() === id);

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  const handleSave = () => {
    const updatedPosts = posts.map((p) =>
      p.id.toString() === id ? { ...p, title, content } : p
    );
    setPosts(updatedPosts);
    history.push("/");
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="post">
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default PostDetails;
