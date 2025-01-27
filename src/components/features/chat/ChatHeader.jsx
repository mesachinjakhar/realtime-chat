import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentChatOpen } from "../../../store/features/currentOpenChat/currentOpenChatSlice";

const ChatHeader = () => {
  const dispatch = useDispatch();
  const currentOpenChat = useSelector(
    (state) => state.currentOpenChat.currentOpenChat
  );

  function handleBackClick() {
    dispatch(setCurrentChatOpen(""));
  }

  return (
    <div className="w-[100%] flex gap-4 items-center text-white py-3 px-5 bg-[#232e36] ">
      <i
        onClick={handleBackClick}
        class="bi bi-arrow-left text-3xl cursor-pointer"
      ></i>
      <i className="bi bi-person-circle text-3xl"></i>
      <h5>{currentOpenChat.username}</h5>
    </div>
  );
};

export default ChatHeader;
