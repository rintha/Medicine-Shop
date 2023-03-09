import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Ashoka Medicals</Navbar.Brand>
          <Cart />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
