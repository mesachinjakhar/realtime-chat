import React from "react";
import ActiveUsers from "./ActiveUsers";

const ChatSection = () => {
  return (
    <div className="h-[100vh]  text-black w-[350px] py-5 border-r-2">
      <h1 className="ml-6 text-xl">Active Users</h1>
      <ActiveUsers />
    </div>
  );
};

export default ChatSection;
