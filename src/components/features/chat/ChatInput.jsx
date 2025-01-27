import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "../../../socket";
import { setMessages } from "../../../store/features/messages/messagesSlice";

const ChatInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const currentOpenChat = useSelector(
    (state) => state.currentOpenChat.currentOpenChat
  );
  const user = useSelector((state) => state.user.username);

  function handleMessageChange(e) {
    setIsSent(false);
    setMessage(e.target.value);
  }

  function handleMessageEmmit(e) {
    if (!message) {
      return alert("Enter message");
    }
    setIsSent(true);
    setMessage("");
    const sendMessage = { to: currentOpenChat.id, message: message };
    dispatch(
      setMessages({
        type: "client",
        to: currentOpenChat.id,
        from: "",
        message: message,
      })
    );
    socket.emit("new-message", sendMessage);
  }

  if (currentOpenChat.username == user) {
    return (
      <div className=" flex justify-center items-center mt-5 ">
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
        placeholder="type message"
      />

      <i
        onClick={handleMessageEmmit}
        className={
          isSent == false
            ? "bi bi-send text-2xl cursor-pointer"
            : "bi bi-check-lg text-2xl cursor-pointer"
        }
      ></i>
    </div>
  );
};

export default ChatInput;
