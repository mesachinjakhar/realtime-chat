import React from "react";
import { useSelector } from "react-redux";

const ChatDashboard = () => {
  const currentOpenChat = useSelector(
    (state) => state.currentOpenChat.socketId
  );

  console.log(currentOpenChat);

  if (currentOpenChat) {
    console.log("condition true ");
    return (
      <div className="h-[100vh] w-[70%] bg-[#232e36]">
        <h1>Hello from chat dashboard</h1>
      </div>
    );
  }
};

export default ChatDashboard;
