import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./store/features/username/usernameSlice";
import currentOpenChatReducer from "./store/features/currentOpenChat/currentOpenChat";

const store = configureStore({
  reducer: {
    usernameSlice: usernameReducer,
    currentOpenChatSlice: currentOpenChatReducer,
  },
});

export default store;
