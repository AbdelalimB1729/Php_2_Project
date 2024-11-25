import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import Navbar from "../Components_user/Nav";
import Footer from "../Components_user/Footer";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      nom: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match!");
        return;
      }
    }
    console.log(`${isLogin ? "Login" : "Register"} data:`, formData);
    setMessage(`${isLogin ? "Login" : "Register"} successful!`);
  };

  return (
    <>
      <Navbar />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="w-100">
          <Col md={6} className="mx-auto">
            <Card className="shadow-lg">
              <Card.Body>
                <h2 className="text-center mb-4">
                  {isLogin ? "Login" : "Register"}
                </h2>
                {message && (
                  <Alert
                    variant={
                      message.includes("successful") ? "success" : "danger"
                    }
                  >
                    {message}
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <Form.Group className="mb-3" controlId="formNom">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  {!isLogin && (
                    <Form.Group
                      className="mb-3"
                      controlId="formConfirmPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm your password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  )}
                  <Button
                    type="submit"
                    className="w-100"
                    variant={isLogin ? "primary" : "success"}
                  >
                    {isLogin ? "Login" : "Register"}
                  </Button>
                </Form>
                <div className="text-center mt-3">
                  <Button
                    variant="link"
                    onClick={toggleForm}
                    style={{ textDecoration: "none" }}
                  >
                    {isLogin
                      ? "Don't have an account? Register"
                      : "Already have an account? Login"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AuthPage;
