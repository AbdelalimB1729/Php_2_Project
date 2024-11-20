import React, { useState } from "react";
import Sidebar from "../Components_admin/Sidebar";
import { Table, Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "../CSS/AdminDashbord.css"

const ManageBooks = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction" },
    { id: 2, title: "1984", author: "George Orwell", category: "Dystopian" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState({ title: "", author: "", category: "" });

  const handleAddBook = () => {
    setBooks([...books, { id: books.length + 1, ...formState }]);
    setShowModal(false);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chartData = {
    labels: books.map((book) => book.title),
    datasets: [
      {
        label: "Books by Category",
        data: books.map((_, index) => index + 1),
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content p-4">
        <h1>Manage Books</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <FormControl
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        <Button className="mb-3" onClick={() => setShowModal(true)}>
          Add New Book
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>
                  <Button variant="warning" className="me-2">
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button variant="danger" onClick={() => handleDeleteBook(book.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2>Books Chart</h2>
        <Line data={chartData} />

        {/* Add/Edit Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter book title"
                  value={formState.title}
                  onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author name"
                  value={formState.author}
                  onChange={(e) => setFormState({ ...formState, author: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter book category"
                  value={formState.category}
                  onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleAddBook}>
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ManageBooks;
