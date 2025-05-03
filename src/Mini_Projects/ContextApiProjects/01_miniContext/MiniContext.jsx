import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function MiniContext() {
  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-blue-200 to-pink-300 p-6">
        <p className="text-lg font-semibold text-gray-700 mb-6 text-center">
          🚀 Just learning how to use{" "}
          <span className="text-purple-700">Context API</span>!
        </p>

        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md mb-6">
          <Login />
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default MiniContext;
