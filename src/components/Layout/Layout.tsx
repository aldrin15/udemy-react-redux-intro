import { ReactNode } from 'react'
import MainHeader from './MainHeader'

interface Props {
    children: string | JSX.Element | JSX.Element[] | ReactNode
}

const Layout = (props: Props) => {
    return (
        <>
            <MainHeader />
            <main>{props.children}</main>
        </>
    )
}

export default Layout
