import React from 'react'
import { NavLink } from 'react-router-dom'

const AdSidebar = () => {
    return (
        <>
            {/* <div className="app-box" > */}
                <ul className="sidebar-icon sidebar-bg">
                    <li className="active sidebar-padding">
                        <NavLink to="/">
                            <img src="assets/images/home.png" className="bar-icon-img" alt="Home" />
                            <h4>Home</h4>
                        </NavLink>
                    </li>
                </ul>
            {/* </div> */}
        </>
    )
}

export default AdSidebar