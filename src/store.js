import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/features/user/userSlice";
import currentOpenChatReducer from "./store/features/currentOpenChat/currentOpenChatSlice";
import activeUsersReducer from "./store/features/activeUsers/activeUsersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    currentOpenChat: currentOpenChatReducer,
    activeUsers: activeUsersReducer,
  },
});

export default store;
