import React from "react";

const ChatInput = () => {
  return (
    <div className="text-white flex justify-center p-2 px-40 items-center gap-5">
      <input
        className="border-0 rounded-lg bg-[#283942] p-3 text-white"
        type="text"
      />
      <a>Send</a>
    </div>
  );
};

export default ChatInput;
