import React, { useState } from "react";
import { useSelector } from "react-redux";
import socket from "../../../socket";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const currentOpenChat = useSelector(
    (state) => state.currentOpenChat.currentOpenChat
  );
  const user = useSelector((state) => state.user.username);

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleMessageEmmit() {
    socket.emit("new-message", message);
  }

  if (currentOpenChat.username == user) {
    console.log("condition true");
    return (
      <div className=" flex justify-center">
        Sorry you cant send message to yourself
      </div>
    );
  }

  return (
    <div className="text-white flex justify-center p-2 px-40 items-center gap-5">
      <input
        value={message}
        onChange={handleMessageChange}
        className="border-0 rounded-lg bg-[#283942] p-3 text-white"
        type="text"
      />
      <i
        onClick={handleMessageEmmit}
        className="bi bi-send text-2xl cursor-pointer"
      ></i>
    </div>
  );
};

export default ChatInput;
