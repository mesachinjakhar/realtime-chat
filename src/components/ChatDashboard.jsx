import React from "react";
import { useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import ChatInbox from "./ChatInbox";
import ChatInput from "./ChatInput";

const ChatDashboard = () => {
  const currentOpenChat = useSelector(
    (state) => state.currentOpenChat.currentOpenChat
  );

  console.log(currentOpenChat.id);

  if (currentOpenChat.id) {
    console.log("condition true ");
    return (
      <div className="h-[100vh] w-[70%] text-white bg-[#232e36]">
        <ChatHeader />
        <ChatInbox />
        <ChatInput />
      </div>
    );
  }
};

export default ChatDashboard;
