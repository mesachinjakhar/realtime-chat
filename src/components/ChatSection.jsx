import React from "react";
import ActiveUsers from "./ActiveUsers";
import { useSelector } from "react-redux";

const ChatSection = () => {
  const username = useSelector((state) => {
    console.log("state is: ", state);
    return state.usernameSlice.username;
  });
  return (
    <div className="h-[100vh] bg-[#111a21]  text-white w-[400px] py-5 border-r-1">
      <h1 className="ml-5 text-lg font-bold">🟢 202 Active Users</h1>
      <ActiveUsers />
      <div className=" flex gap-2 justify-between  text-xs px-5 mt-3">
        <h1>Username: {username.length > 0 ? username : "Not Provided"}</h1>
        <h1>Status: Connected ✅</h1>
      </div>
    </div>
  );
};

export default ChatSection;
