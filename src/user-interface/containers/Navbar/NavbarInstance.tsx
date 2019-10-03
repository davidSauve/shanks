import React, {FunctionComponent} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

interface NavbarProperties {}

const NavbarInstance: FunctionComponent<NavbarProperties> = () => {
    return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Shanks</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavLink to={'/dashboard'} className="nav-item">Dashboard</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarInstance;
