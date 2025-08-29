import React, { useState } from "react";

function PostForm({ setPosts }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("User1");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      author,
      content,
      reactions: { like: 0, love: 0, wow: 0, haha: 0, nope: 0 }
    };
    setPosts((prev) => [newPost, ...prev]);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <select
        id="postAuthor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option>User1</option>
        <option>User2</option>
        <option>User3</option>
      </select>
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
