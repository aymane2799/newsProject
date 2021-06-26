import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        NoSQL Project
                    </Navbar.Brand>
                </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/news">
                                <Nav.Link>News List</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/check">
                                <Nav.Link>Check News</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/check-feelings">
                                <Nav.Link>Check Feelings</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/search">
                                <Nav.Link>Search</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
