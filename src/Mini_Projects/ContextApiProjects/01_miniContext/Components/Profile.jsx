import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>there is not any user</h1>;
  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <h1>Your password is {user.password}</h1>
    </div>
  );
};

export default Profile;
