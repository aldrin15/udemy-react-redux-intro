import { uiActions } from './ui-slice'
import { cartActions } from './cart-slice'

interface Notification {
    status: 'pending' | 'success' | 'error'
    title: string
    message: string
}

const statusError = {
    status: 'error',
    title: 'Error!',
    message: 'Sent cart data failed!',
} as Notification

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://redux-advanced-72a80-default-rtdb.firebaseio.com/cart.json'
            )

            if (!response.ok) {
                throw new Error('Could not fetch cart data')
            }

            return await response.json()
        }

        try {
            const cartData = await fetchData()

            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            )
        } catch (error) {
            dispatch(uiActions.showNotification(statusError))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            } as Notification)
        )

        const sendRequest = async () => {
            const response = await fetch(
                'https://redux-advanced-72a80-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                }
            )

            if (!response.ok) {
                throw new Error('Sending cart data failed!')
            }
        }

        try {
            await sendRequest()

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success...',
                    message: 'Sent cart data successfully!',
                } as Notification)
            )
        } catch (error) {
            dispatch(uiActions.showNotification(statusError))
        }
    }
}
