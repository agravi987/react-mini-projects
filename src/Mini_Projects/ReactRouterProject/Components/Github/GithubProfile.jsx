import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GitHubProfile() {
  const { username } = useParams(); // get username from URL
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGitHubUser = async () => {
      setLoading(true);
      setError("");
      setUserData(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubUser();
  }, [username]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded-xl text-center">
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold mt-3">
            {userData.name || userData.login}
          </h2>
          <p className="text-gray-600">{userData.bio}</p>
          <p className="text-sm mt-2">📍 {userData.location}</p>
          <p className="text-sm mt-1">
            👥 {userData.followers} followers • {userData.following} following
          </p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-orange-600 underline"
          >
            View on GitHub
          </a>
        </>
      )}
    </div>
  );
}
