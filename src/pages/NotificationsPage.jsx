import React from "react";

function NotificationsPage({ notifications, setNotifications }) {
  const refreshNotifications = () => {
    setNotifications(["New Like", "New Comment", "New Follower"]);
  };

  return (
    <section className="notificationsList">
      <button onClick={refreshNotifications}>Refresh Notifications</button>
      {notifications.map((note, i) => (
        <div key={i}>{note}</div>
      ))}
    </section>
  );
}

export default NotificationsPage;
