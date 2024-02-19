/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
        userID: ""
    },
    reducers: {
        updateUser: (state, action) => {
            state.userID = action.payload
        },
        addItem: (state, action) => {
            const data = state.items;
            const payloadString = JSON.stringify(action.payload);
            if (payloadString in data) {
                data[payloadString] += 1;
                state.items = data
            } else {
                state.items[payloadString] = 1;
                console.log("else");
            }
            console.log(current(state.items));
        },
        removeItem: (state, action) => {
            const payloadString = JSON.stringify(action.payload);
            if (state.items[payloadString] === 1) {
                delete state.items[payloadString]; // Remove the item completely
            } else if (state.items[payloadString] > 1) {
                state.items[payloadString] -= 1; // Reduce count by one
            }
        },
        clearAll: (state, action) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearAll, updateUser } = cartSlice.actions;
export default cartSlice.reducer;
