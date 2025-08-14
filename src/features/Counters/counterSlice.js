import { createSlice } from "@reduxjs/toolkit";


const initialCounters = [
    {
        id: 1,
        value: 0,
    },
    {
        id: 2,
        value: 0,
    },
];


const counterSlice = createSlice({
    name:"counters",
    initialState: initialCounters,
    reducers: {
        increment:(state,action) =>{
            const counterIndex = state.findIndex(
                (c) => c.id === action.payload
            );
            state[counterIndex].value++;
        },
        decrement: (state,action) =>{
            const currentIndex = state.findIndex(
                (c)=> c.id === action.payload
            );
            state[currentIndex].value--;
        }
    },

});

export default counterSlice.reducer;
export const {increment,decrement} = counterSlice.actions;