import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <NavLink 
                            to="/" 
                            exact 
                            className="nav-link"
                            activeClassName="active activeHome"
                        >
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/countries" className="nav-link">The Countries</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar