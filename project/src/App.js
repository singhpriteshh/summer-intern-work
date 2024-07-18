import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function App() {
  const [mydata, setData] = useState([]);
  const [category, setCategory] = useState('sports');

  const apiget = (category) => {
    fetch(`https://inshortsapi.vercel.app/news?category=${category}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiget(category);
  };

  useEffect(() => {
    apiget(category);
    const interval = setInterval(() => {
      apiget(category);
    }, 500000);
    return () => clearInterval(interval);
  }, [category]);

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group controlId="categoryInput">
          <Form.Label>News Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter news category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Fetch News
        </Button>
      </Form>
      
      <Row xs={1} md={3} className="g-4 mt-4">
        {mydata.map((value, index) => (
          <Col key={index} className="container-fluid mt-4">
            <Card>
              <Card.Img variant="top" src={value.imageUrl} height="275px" />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;

