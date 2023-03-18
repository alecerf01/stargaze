import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';


function Navigation() {
    return (
        <Navbar className="nav-style" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className="logo" href="#">
                    <img src="/logo.svg" height="30" className="d-inline-block align-top" alt="stargaze logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <ul className="navbar-nav"> 

                            <li className="nav-item">
                                <NavLink  aria-current="page" to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Home </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/favourite" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Favourite </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Contact </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/serchresult" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> SearchResult </NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation; 