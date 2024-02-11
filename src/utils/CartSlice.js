import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const array = state.items;
            const elementToRemove = action.payload;
            let temp = [];
            let deal = true;
            for (let i = 0; i < array.length; i++) {
                if (JSON.stringify(elementToRemove) === JSON.stringify(array[i]) && deal) {
                    deal = false;
                } else {
                    temp.push(array[i]);
                }
            }
            state.items = temp;
        },
        clearAll: (state, action) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearAll } = cartSlice.actions;
export default cartSlice.reducer;
