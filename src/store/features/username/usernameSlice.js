import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "usernameSlice",
  initialState: {
    username: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload; // `action.payload` holds the new username
    },
  },
});

export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
