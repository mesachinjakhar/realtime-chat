import React from "react";
import { useSelector } from "react-redux";

const ChatHeader = () => {
  const currentOpenChat = useSelector(
    (state) => state.currentOpenChat.currentOpenChat
  );
  return (
    <div className="w-[100%] flex gap-4 items-center text-white py-3 px-5 bg-[#232e36] ">
      <i className="bi bi-person-circle text-3xl"></i>
      <h5>{currentOpenChat.username}</h5>
    </div>
  );
};

export default ChatHeader;
