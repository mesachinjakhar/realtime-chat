import React from "react";
import { useSelector } from "react-redux";

const ChatInbox = () => {
  // Access messages
  const messages = useSelector((state) => state.messages.messages);
  const currentOpenChat = useSelector(
    (state) => state.currentOpenChat.currentOpenChat
  );
  const username = useSelector((state) => state.user.username);

  // If no messages, show a fallback UI
  if (messages.length === 0 || currentOpenChat.username == username) {
    return (
      <div className="h-[80vh] bg-[#0a131a] py-3 px-5 text-white flex items-center justify-center">
        No messages to display.
      </div>
    );
  }

  // Render the messages for the current chat
  return (
    <div className="h-[80vh] bg-[#0a131a] py-3 px-5 text-white overflow-y-auto">
      {messages.map((msg) => {
        if (msg.from == currentOpenChat.id || msg.to == currentOpenChat.id) {
          return (
            <div
              className={`flex ${
                msg.type == "client" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={
                  msg.type == "client"
                    ? "px-2 py-1 text-white list-none border-0 rounded-tr-xl mb-2 bg-[#5479e5] w-[20%]"
                    : "px-2 py-1 bg-[#212c34] text-white list-none border-0 rounded-tr-xl mb-2 w-[20%]"
                }
              >
                <li>{msg.message}</li>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ChatInbox;
