import { createSlice } from "@reduxjs/toolkit";

const currentOpenChatSlice = createSlice({
  name: "currentOpenChatSlice",
  initialState: {
    socketId: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.socketId = action.payload; // `action.payload` holds the new username
    },
  },
});

export const { setUsername } = currentOpenChatSlice.actions;
export default currentOpenChatSlice.reducer;
