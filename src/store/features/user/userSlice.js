import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    username: "",
    status: "Disconnected",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload; // `action.payload` holds the new username
    },
    setStatus: (state) => {
      state.status = "Connected ✅"; // `action.payload` holds the new username
    },
  },
});

export const { setUsername, setStatus } = userSlice.actions;
export default userSlice.reducer;
