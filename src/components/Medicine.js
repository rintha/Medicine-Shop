import React, { useContext } from "react";
import { Table, Card, Container, Button } from "react-bootstrap";
import CartContext from "../store/CartContext";

const Medicine = (props) => {
  const medicines = props.medicines;

  const cartCtx = useContext(CartContext);

  const onAddToCart = (event) => {
    event.preventDefault();
    cartCtx.addItem({ ...props, quantity: Number(1) });
  };

  return (
    <Container className="justify-content-center d-flex my-3">
      <Card style={{ width: "100rem" }}>
        <Table striped className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Medicine Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{medicine.name}</td>
                <td>{medicine.description}</td>
                <td>{medicine.price}</td>
                <td>{medicine.quantity}</td>
                <td>
                  <Button
                    onClick={onAddToCart}
                    variant="dark"
                    disabled={props.quantity === 0}
                  >
                    {props.quantity === 0 ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default Medicine;
