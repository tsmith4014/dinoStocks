import React from 'react';
import { Navbar, Nav, Container, Button, NavItem } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { userAPI } from "../utilities";
import DinoStocks from '../assets/images/DinoStocks.png';


const NavBar = ({ user, setUser, buyingPower, portfolioValue }) => {
  const navigate = useNavigate()

  const logOut = async () => {
    let response = await userAPI.post("LogOut/");
    if (response.status === 204) {
      setUser(null);
      localStorage.removeItem("token");
      delete userAPI.defaults.headers.common["Authorization"];
      navigate("/")
    }

  };


  return (
    <Navbar expand="lg" >
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
            {user && <Nav.Link as={Link} to="/overview">Overview</Nav.Link>}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          {user ? (
            <div className="user_info">
              <Navbar.Text>Portfolio Value: ${parseFloat(portfolioValue).toFixed(2)}</Navbar.Text>
              <Navbar.Text>Buying Power: ${parseFloat(buyingPower).toFixed(2)}</Navbar.Text>
              <Button onClick={logOut} variant="success">
                Log Out
              </Button>
            </div>
          ) : (
            <>
              <Button as={Link} to="/login" variant="success" style={{ marginLeft: '10px' }}>Log In </Button>
              <Button as={Link} to="/signup" variant="success" style={{ marginLeft: '10px' }}>Sign Up </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default NavBar;