import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = () => {
    return (
        <>
            <header>
                <Navbar>
                    <NavLink to="/">Home</NavLink>
                </Navbar>
            </header>
            <Outlet />
        </>
    )
}

export default Layout;