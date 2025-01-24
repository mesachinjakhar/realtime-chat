import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const username = useSelector((state) => state.userSlice.username);
  const status = useSelector((state) => state.userSlice.status);

  return (
    <div className=" flex gap-2 justify-between  text-xs px-5 mt-3">
      <h1>Username: {username.length > 0 ? username : "Not Provided"}</h1>
      <h1>Status: {status}</h1>
    </div>
  );
};

export default User;
