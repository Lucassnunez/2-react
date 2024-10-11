import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>

    <h1>INDUMENTARIA LN</h1>
      <Navbar bg="dark" data-bs-theme="dark">
      <img className="logo" src="./assets/img/imagen-logo.png" alt="" />
        <Container>
          <NavLink to={'/'}>Inicio</NavLink>
          <Nav className="me-auto">
            <NavLink to={'categoria/Remeras'}>Remeras</NavLink>
            <NavLink to={'categoria/Buzos'}>Buzos</NavLink>
            <NavLink to={'categoria/Pantalones'}>Pantalones</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <CartWidget/>

    </>
  );
}

export default NavBar;