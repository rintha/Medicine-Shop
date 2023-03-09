import React, { useContext }  from "react";
import { ListGroup, Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const CartItem = () => {

  const cartContx = useContext(CartContext);
   
  cartContx.items.map((cartItem) => {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto" key={cartItem.id}>
            <div className="fw-bold">{cartItem.name}</div>
            ${cartItem.price}
          </div>
          <div>
            <button className="btn btn-outline-dark me-2">-</button>
            <span>{cartItem.quantity}</span>
            <button className="btn btn-outline-dark ms-2">+</button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className=" fw-bold text-muted text-end">
            <p>
              Total :<span className="mx-2 ">${cartItem.totalAmount}</span>
            </p>
          </div>
          <div class="text-center">
            <Button variant="dark">PURCHASE</Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
  });
};

export default CartItem;
