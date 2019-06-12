import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header>
      <h1>Home Screen</h1>
      <Link to="/friends">Go to FriendsList</Link>
    </header>
  );
};

export default Home;
