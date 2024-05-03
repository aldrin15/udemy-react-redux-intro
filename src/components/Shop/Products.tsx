import ProductItem from './ProductItem'

import { DUMMY_PRODUCTS } from '../../data/dummy-products'
import classes from './Products.module.css'

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>

            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Products
