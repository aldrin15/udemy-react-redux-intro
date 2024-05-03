import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Notification from './components/UI/Notification'
import Products from './components/Shop/Products'

import { Store } from './store/index'
import { fetchCartData, sendCartData } from './store/cart-actions'

let isInitial = true

const App = () => {
    const dispatch = useDispatch()
    const showCart = useSelector((state: Store) => state.ui.cartIsVisible)
    const cart = useSelector((state: Store) => state.cart)
    const notification = useSelector((state: Store) => state.ui.notification)

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch])

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }

        if (cart.changed) {
            dispatch(sendCartData(cart))
        }
    }, [cart, dispatch])

    return (
        <>
            {Object.keys(notification).length !== 0 && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    )
}

export default App
