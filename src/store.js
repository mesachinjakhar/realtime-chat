import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/features/user/userSlice";
import currentOpenChatReducer from "./store/features/currentOpenChat/currentOpenChatSlice";

const store = configureStore({
  reducer: {
    userSlice: userReducer,
    currentOpenChatSlice: currentOpenChatReducer,
  },
});

export default store;
