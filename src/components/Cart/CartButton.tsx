import { useDispatch, useSelector } from 'react-redux'

import { Store } from '../../store/index'
import { uiActions } from '../../store/ui-slice'
import classes from './CartButton.module.css'

const CartButton = () => {
    const dispatch = useDispatch()
    const cartQuantity = useSelector((state: Store) => state.cart.totalQuantity)

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle())
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    )
}

export default CartButton
