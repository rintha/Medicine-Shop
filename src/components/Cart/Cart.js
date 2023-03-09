import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import HeaderCartButton from "../Header/HeaderCartButton";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <HeaderCartButton onShowCart={() => setShowCart(!showCart)} />

      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(!showCart)}
        placement={"end"}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <div className="text-center" />
          <Offcanvas.Title>YOUR CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartItem />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
