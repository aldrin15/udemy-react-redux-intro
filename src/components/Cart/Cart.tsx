import { useSelector } from 'react-redux'

import Card from '../UI/Card'
import CartItem from './CartItem'
import { Item } from '../../store/cart-slice'

import classes from './Cart.module.css'

interface Cart {
    cart: {
        items: [Item]
    }
}

const Cart = () => {
    const cartItems = useSelector((state: Cart) => state.cart.items)

    return (
        <Card className={classes.cart}>
            <h2>You Shopping Cart</h2>

            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.title,
                            quantity: item.quantity,
                            totalPrice: item.totalPrice,
                            price: item.price,
                        }}
                    />
                ))}
            </ul>
        </Card>
    )
}

export default Cart
