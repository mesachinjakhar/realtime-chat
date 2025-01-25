import { createSlice } from "@reduxjs/toolkit";

const currentOpenChatSlice = createSlice({
  name: "currentOpenChatSlice",
  initialState: {
    currentOpenChat: {},
  },
  reducers: {
    setCurrentChatOpen: (state, action) => {
      state.currentOpenChat = action.payload; // `action.payload` holds the new username
    },
  },
});

export const { setCurrentChatOpen } = currentOpenChatSlice.actions;
export default currentOpenChatSlice.reducer;
