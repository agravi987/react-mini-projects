import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-xl text-red-600 font-semibold">
          🚫 No user is logged in.
        </h1>
      </div>
    );
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm w-full text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        👋 Welcome, <span className="text-blue-600">{user.username}</span>!
      </h1>
      <p className="text-gray-600 mb-2">
        🔐 Your password is:{" "}
        <span className="font-semibold text-gray-800">{user.password}</span>
      </p>
    </div>
  );
};

export default Profile;
