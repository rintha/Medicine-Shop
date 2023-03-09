import React, { useRef } from "react";
import { Card, Col, Row, Container, Form} from "react-bootstrap";


const AddMedicine = (props) => {

  const medNameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();
    const newMedicine = {
      name: medNameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
    };
    props.setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
    
    // clear form inputs
    medNameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
  }

  return (
    <section>
      <Container className="justify-content-center d-flex">
        <Card className="my-4" style={{ width: "30rem" }}>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Medicine Name</Form.Label>
                <Form.Control type="text" id="medName" ref={medNameRef} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  id="description"
                  ref={descriptionRef}
                  style={{ height: "50px" }}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" id="price" ref={priceRef} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Quantity Available</Form.Label>
                    <Form.Control
                      type="number"
                      id="quantity"
                      ref={quantityRef}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center">
                <button className="btn btn-dark">Add Medicines</button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default AddMedicine;
