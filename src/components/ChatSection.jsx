import React from "react";
import ActiveUsers from "./ActiveUsers";
import User from "./User";

const ChatSection = () => {
  return (
    <div className="h-[100vh] bg-[#111a21]  text-white w-[400px] py-5 border-r-1">
      <h1 className="ml-5 text-lg font-bold">🟢 202 Active Users</h1>
      <ActiveUsers />
      <User />
    </div>
  );
};

export default ChatSection;
