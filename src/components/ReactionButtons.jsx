import React, { useState } from "react";

function ReactionButtons({ post }) {
  const [reactions, setReactions] = useState(post.reactions);

  const addReaction = (type) => {
    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  return (
    <div>
      <button onClick={() => addReaction("like")}>👍 {reactions.like}</button>
      <button onClick={() => addReaction("love")}>❤️ {reactions.love}</button>
      <button onClick={() => addReaction("wow")}>😮 {reactions.wow}</button>
      <button onClick={() => addReaction("haha")}>😂 {reactions.haha}</button>
      <button disabled>❌ {reactions.nope}</button>
    </div>
  );
}

export default ReactionButtons;
