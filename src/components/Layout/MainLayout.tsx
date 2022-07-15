import React from "react";
import {NavLink, Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>2022</footer>
        </>
    )
}

export default MainLayout;