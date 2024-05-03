import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: {} },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            const payload = action.payload

            state.notification = {
                state: payload.status,
                title: payload.title,
                message: payload.message,
            }
        },
    },
})

export const uiActions = uiSlice.actions

export default uiSlice
