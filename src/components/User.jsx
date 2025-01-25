import React from "react";
import { useSelector } from "react-redux";
import socket from "../socket";
import { setStatus } from "../store/features/user/userSlice";
import { useDispatch } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const status = useSelector((state) => state.user.status);

  socket.on("connect", () => {
    dispatch(setStatus());
  });

  return (
    <div className=" flex gap-2 justify-between  text-xs px-5 mt-3">
      <h1>Username: {username.length > 0 ? username : "Not Provided"}</h1>
      <h1>Status: {status}</h1>
    </div>
  );
};

export default User;
