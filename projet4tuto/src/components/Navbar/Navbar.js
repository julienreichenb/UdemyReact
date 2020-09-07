import React from 'react'
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap'

const component = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link href="/">
                        Awesome Project
                    </Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact to="/">
                        <Nav.Link href="/">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/localization">
                        <Nav.Link href="/localization">Localization</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </LinkContainer>
                </Nav>                
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default component