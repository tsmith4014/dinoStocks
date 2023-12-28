import React from 'react';
import { Navbar, Nav, Container, Button, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { userAPI } from "../utilities";  
import DinoStocks from '../assets/images/DinoStocks.png';

const NavBar = ({ user, setUser }) => {
    console.log("Current user in NavBar:", user);
  const logOut = async () => {
    let response = await userAPI.post("logout/");
    if (response.status === 204) {
      setUser(null);
      localStorage.removeItem("token");
      delete userAPI.defaults.headers.common["Authorization"];
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
            <img
                src={DinoStocks}
                alt="Dino Stocks Logo"
                height="30"
            />{' '}
            Dino Stocks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/market">Market</Nav.Link>
            <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
          </Nav>
          {user ? (
            <>
              <Button onClick={logOut} variant="danger">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/login" variant="success" style={{ marginLeft: '10px' }}>Log In </Button>
              <Button as={Link} to="/signup" variant="success" style={{ marginLeft: '10px' }}>Sign Up </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;