import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counters/counterSlice";
const store = configureStore({
    reducer:{
        counters:{
            counters: counterReducer,
        }
    }
})

export default store;