import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

function BookList({ books, onAddToCart }) {
  if (!books || books.length === 0) {
    return (
      <Container style={{ minHeight: "80vh" }} className="d-flex align-items-center justify-content-center">
        <h2>No books available</h2>
      </Container>
    );
  }

  return (
    <Container style={{ minHeight: "80vh", paddingTop: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2.5rem" }}>Our Book Collection</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {books.map((book) => (
          <Col key={book.ID_livre}>
            <Card
              style={{
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s",
                overflow: "hidden",
              }}
              className="h-100"
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Card.Img
                variant="top"
                src={book.Sourceimg || "../DB/Images_Livres/default.jpg"}
                alt={book.titre}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderBottom: "3px solid rgba(0, 0, 0, 0.1)",
                }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{book.titre}</Card.Title>
                <Card.Text style={{ fontSize: "0.95rem" }}>{book.Description}</Card.Text>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Badge
                    bg="primary"
                    style={{ fontSize: "1rem", padding: "10px", borderRadius: "20px" }}
                  >
                    {book.prix} €
                  </Badge>
                  <Button variant="success" onClick={() => onAddToCart(book)} style={{ borderRadius: "20px" }}>
                    Add
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
