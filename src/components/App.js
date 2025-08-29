import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import UsersPage from "../pages/UsersPage.jsx";
import NotificationsPage from "../pages/NotificationsPage";
import PostDetails from "../pages/PostDetails";
import "../styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);

  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>

        {/* Navigation */}
        <nav>
          <Link to="/">Posts</Link>{" "}
          <Link to="/users">Users</Link>{" "}
          <Link to="/notifications">Notifications</Link>
        </nav>

        {/* Routes */}
        <Switch>
          <Route exact path="/">
            <LandingPage posts={posts} setPosts={setPosts} />
          </Route>
          <Route exact path="/users">
            <UsersPage posts={posts} />
          </Route>
          <Route path="/notifications">
            <NotificationsPage
              notifications={notifications}
              setNotifications={setNotifications}
            />
          </Route>
          <Route path="/posts/:id">
            <PostDetails posts={posts} setPosts={setPosts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
