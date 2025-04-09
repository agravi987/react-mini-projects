import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Github() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() != "") {
      navigate(`/github/${username}`);
    }
  };

  return (
    <div className="h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-center">
          Search GitHub Profile
        </h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Github;
