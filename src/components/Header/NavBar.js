import React from "react";
import { Navbar, Container } from "react-bootstrap";
import HeaderCartBuitton from "./HeaderCartBuitton";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Ashoka Medicals</Navbar.Brand>
          <HeaderCartBuitton />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
