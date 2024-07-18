import { createSlice } from "@reduxjs/toolkit";

export interface Item {
    id: number,
    name: string
}

interface cartState {
    cart: Item[]
}

const initialState: cartState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload
            state.cart = [...state.cart, item]
            console.log(state.cart)
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cart = state.cart.filter(item => item.id !== itemId)
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions
export const { getInitialState } = cartSlice
export default cartSlice.reducer