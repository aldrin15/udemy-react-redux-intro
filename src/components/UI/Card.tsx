import classes from './Card.module.css'

interface Card {
    className?: string
    children?: string | JSX.Element | JSX.Element[]
}

const Card = (props: Card) => {
    return (
        <section
            className={`${classes.card} ${
                props.className ? props.className : ''
            }`}
        >
            {props.children}
        </section>
    )
}

export default Card
