import { createSlice } from '@reduxjs/toolkit'

export interface Item {
    id: number
    title?: string
    price?: number
    quantity?: number
    totalPrice?: number
    description?: string
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            const payload = action.payload

            state.totalQuantity = payload.totalQuantity
            state.items = payload.items
        },
        addItemToCart(state, action) {
            const payload = action.payload
            let existingItem

            if (state.items) {
                existingItem = state.items.find(
                    (item: Item) => item.id === payload.id
                )
            }

            state.totalQuantity++
            state.changed = true

            if (!existingItem) {
                const data: Item = {
                    id: payload.id,
                    title: payload.title,
                    price: payload.price,
                    quantity: 1,
                    totalPrice: payload.price,
                }

                state.items.push(data)
            } else {
                existingItem.quantity++
                existingItem.totalPrice =
                    existingItem.totalPrice + payload.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload

            const existingItem: Item = state.items.find(
                (item) => item.id === id
            )

            state.totalQuantity--
            state.changed = true

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price
            }
        },
    },
})

export const cartActions = cartSlice.actions

export default cartSlice
