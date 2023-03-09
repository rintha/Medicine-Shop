import React from "react";
import { Button, Badge } from "react-bootstrap";

const HeaderCartBuitton = () => {
  return (
    <>
      <Button variant="outline-dark position-relative me-4">
        Cart
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
          0<span class="visually-hidden">cart</span>
        </span>
      </Button>
    </>
  );
};

export default HeaderCartBuitton;
