import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../images/logo.jpeg';
import React from 'react';

function NavbarComponent(props) {
    return (
        <Navbar expand="lg" className="LargeHeader">
            <Navbar.Brand href="#home">
                <a className="navbar-brand color-red" href="/">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
                KEEN
            </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <div className="input-group top-search-bar">
                        <input type="text" class="form-control" id="aaa" autoComplete={'off'} placeholder="Username" />
                        <div className="input-group-append">
                            <div className="input-group-text btn-grp">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Nav>
                <Form inline className="navbar-items">
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-dark">Sign Up</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;