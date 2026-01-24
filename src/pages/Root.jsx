import { RxHamburgerMenu } from 'react-icons/rx'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'

const Root = () => {
    const items = [
        {
            content: "Home",
            url: ""
        },
        {
            content: "About",
            url: "/about"
        },
    ]
    return (
        <div>
            <NavBar
                logo=" Abdullah Alhakem "
                items={items}
                icon={<RxHamburgerMenu />}
                btn="Sign In"
            />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
