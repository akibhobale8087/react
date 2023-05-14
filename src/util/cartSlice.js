import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[], 
    },
    reducers:{
        addItem: (state,action) => {
            state.items.push(action.payload)
        },
        removeItems: (state,action) =>{
            state.items = state.items.filter(item => item !== action.payload)
        },
        clearCart:(state) =>{
            state.items = [];
        },
    }
})

export const {addItem,removeItems,clearCart} = cartSlice.actions;

export default cartSlice.reducer;