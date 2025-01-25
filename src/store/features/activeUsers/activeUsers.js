import { createSlice } from "@reduxjs/toolkit";

const activeUsersSlice = createSlice({
  name: "activeUsersSlice",
  initialState: {
    activeUsersCount: 0,
    activeUsers: {},
  },
  reducers: {
    setActiveUsersCount: (state, action) => {
      state.activeUsersCount = action.payload; // `action.payload` holds the new username
    },
    setActiveUsers: (state, action) => {
      state.activeUsers = action.payload; // `action.payload` holds the active users array
    },
  },
});

export const { setActiveUsersCount, setActiveUsers } = activeUsersSlice.actions;
export default activeUsersSlice.reducer;
