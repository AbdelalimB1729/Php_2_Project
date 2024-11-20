import React, { useState, useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import BookFilter from "../Components/BookFilter";
import BookList from "../Components/BookList";
import { getData } from "../services/api";

function Shop() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    filterAndSortBooks();
  }, [category, sort, books]);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getData({ controller: "Livre", action: "getAllLivres" });
      if (Array.isArray(response)) {
        setBooks(response);
        setFilteredBooks(response);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortBooks = () => {
    let updatedBooks = [...books];
    if (category) updatedBooks = updatedBooks.filter((book) => book.category === category);
    if (sort === "asc") updatedBooks.sort((a, b) => a.price - b.price);
    if (sort === "desc") updatedBooks.sort((a, b) => b.price - a.price);
    setFilteredBooks(updatedBooks);
  };

  const handleAddToCart = (book) => {
    console.log("Added to cart:", book);
  };

  return (
    <Container style={{ minHeight: "80vh", paddingTop: "20px" }}>
      <h1 className="text-center mb-4">Welcome to the Book Shop</h1>
      <BookFilter setCategory={setCategory} setSort={setSort} />
      {error && <Alert variant="danger" className="text-center">{error}</Alert>}
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <BookList books={filteredBooks} onAddToCart={handleAddToCart} />
      )}
    </Container>
  );
}

export default Shop;
