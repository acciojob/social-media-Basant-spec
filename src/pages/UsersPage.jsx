import React from "react";

function UsersPage({ posts }) {
  const users = ["User1", "User2", "User3"];

  return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>
          <div className="post">
            <h4>{user}</h4>
            {posts
              .filter((p) => p.author === user)
              .map((p) => (
                <p key={p.id}>{p.title}</p>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UsersPage;
