import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function MiniContext() {
  return (
    <div>
      <UserContextProvider>
        <h1>I am learning context api</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default MiniContext;
