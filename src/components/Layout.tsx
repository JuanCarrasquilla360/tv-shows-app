import Navigation from './Navigation'
import Footer from './Footer'

import { List } from './List'

const Layout = ({ children }: { children: any }) => {
    

    return (
        <>
            <Navigation />
                <List publisher='tvShows'/>
            <Footer />
        </>
    )
}

export default Layout
