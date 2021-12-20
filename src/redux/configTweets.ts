import { createSlice } from '@reduxjs/toolkit';

export const configTweets = createSlice({
  name: "configTweets",
  initialState: {
    numberOfPost: 1,
    updateInterval: 15000,
  },
  reducers: {
    numberOfPost: (state, action) => {
      state.numberOfPost = action.payload;
    },
    updateInterval: (state, action) => {
      state.updateInterval = action.payload;
    },
  }
});

export const { numberOfPost, updateInterval } = configTweets.actions;

export default configTweets.reducer;