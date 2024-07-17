import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Table } from 'react-bootstrap';

function App() {
  const [spacecrafts, setSpacecrafts] = useState([]);

  const fetchData = () => {
    fetch('https://isro.vercel.app/api/spacecrafts')
      .then((response) => response.json())
      .then((data) => {
        setSpacecrafts(data.spacecrafts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <h1>ISRO Spacecrafts</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {spacecrafts.map((spacecraft, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{spacecraft.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default App;
