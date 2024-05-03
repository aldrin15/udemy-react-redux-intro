import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui-slice'
import cartSlice from './cart-slice'

export interface Store {
    ui: {
        cartIsVisible: boolean
        notification: {
            status: string
            title: string
            message: string
        }
    }
    cart: {
        items: []
        totalQuantity: number
        changed: boolean
    }
}

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    },
})

export default store
