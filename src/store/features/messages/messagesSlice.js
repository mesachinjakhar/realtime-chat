import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messagesSlice",
  initialState: {
    messages: [], // Initial state is an array of messages
  },
  reducers: {
    setMessages: (state, action) => {
      // Push the new message into the existing messages array
      state.messages.push({
        type: action.payload.type,
        to: action.payload.to,
        from: action.payload.from,
        message: action.payload.message,
      });
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
