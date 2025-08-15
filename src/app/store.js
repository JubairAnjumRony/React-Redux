import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counters/counterSlices";
import postsReducers from "../features/Posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducers,
  },
});

export default store;
