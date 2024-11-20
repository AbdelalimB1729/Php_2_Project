import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function BookFilter({ setCategory, setSort }) {
  return (
    <Form className="filter-container p-3 rounded shadow-sm bg-light mb-4">
      <Row className="gy-3 align-items-center">
        {/* Filter by Category */}
        <Col xs={12} md={6}>
          <Form.Group controlId="categoryFilter">
            <Form.Label className="fw-bold text-muted">Category</Form.Label>
            <Form.Select
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
              className="filter-select"
            >
              <option value="">All Categories</option>
              <option value="Roman">Roman</option>
              <option value="Philosophie">Philosophie</option>
              <option value="Science">Science</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Sort by Price */}
        <Col xs={12} md={6}>
          <Form.Group controlId="sortFilter">
            <Form.Label className="fw-bold text-muted">Sort by</Form.Label>
            <Form.Select
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort by price"
              className="filter-select"
            >
              <option value="">Sort by</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default BookFilter;
