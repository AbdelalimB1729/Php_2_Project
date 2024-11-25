import React, { useState } from "react";
import { Button, Container, InputGroup, Form, Card, Row, Col } from "react-bootstrap";
import Navbar from "../Components_user/Nav";
import Footer from "../Components_user/Footer";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 20,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <>
      <Navbar />
      <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4 fw-bold">Your Shopping Cart</h2>
        {cart.length > 0 ? (
          <>
            <Row className="g-4">
              {cart.map((item) => (
                <Col md={6} lg={4} key={item.id}>
                  <Card className="shadow-sm h-100">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.name}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        Price: <strong>${item.price.toFixed(2)}</strong>
                      </Card.Text>
                      <Card.Text>
                        Total: <strong>${(item.quantity * item.price).toFixed(2)}</strong>
                      </Card.Text>
                      <InputGroup className="mb-3">
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </Button>
                        <Form.Control
                          value={item.quantity}
                          readOnly
                          className="text-center"
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </Button>
                      </InputGroup>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-100"
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-end mt-4">
              <h4>Total: ${calculateTotal().toFixed(2)}</h4>
              <Button variant="primary" size="lg">
                Pay ${calculateTotal().toFixed(2)}
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-5">
            <h3>Your cart is empty!</h3>
            <Button variant="primary" href="/shop">
              Shop Now
            </Button>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ShoppingCart;
