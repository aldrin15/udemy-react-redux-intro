import { useDispatch } from 'react-redux'

import { cartActions, Item } from '../../store/cart-slice'
import classes from './CartItem.module.css'

interface CartItem {
    item: Item
}

const CartItem = (props: CartItem) => {
    const dispatch = useDispatch()

    const { id, title, quantity, totalPrice, price }: Item = props.item

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    }

    const addItemHanlder = () => {
        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price,
            })
        )
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${totalPrice?.toFixed(2)}
                    <span className={classes.itemprice}></span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHanlder}>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem
