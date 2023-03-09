import React,{useContext} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const HeaderCartBuitton = (props) => {
  const cartHeaderbtnContext = useContext(CartContext);

  let quantity = 0;
  cartHeaderbtnContext.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
    console.log(quantity);
  });
  return (
    <>
      <Button  onClick={props.onShowCart} variant="outline-dark position-relative me-4">
        Cart
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
          {quantity}<span className="visually-hidden">cart</span>
        </span>
      </Button>
    </>
  );
};

export default HeaderCartBuitton;
