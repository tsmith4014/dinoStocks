import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import { userAPI } from '../utilities';
const OverviewPage = () => {
  const [userInfo, setUserInfo] = useState([])

  const mockStockData = [
    { stock: 'Dino Corp', details: '20 shares @ $50', price: '$1000' },
    { stock: 'Jurassic Ventures', details: '10 shares @ $80', price: '$800' },
    { stock: 'Prehistoric Inc', details: '5 shares @ $120', price: '$600' },
  ];

  const fetchPortfolio = async () => {
    let token = localStorage.getItem("token")
    if (token) {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/portfolio/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        console.log(response)
        setUserInfo(response.data)
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    }

  }
  useEffect(() => {
    const fetchData = async () => {
      await fetchPortfolio();
    };

    fetchData();
  }, []);





  console.log(userInfo)
  return (
    <Container fluid>
      <Row className="my-4">
        <Col md={3}>
          <Card className="mb-3">
            <Card.Img variant="top" src="https://via.placeholder.com/150" className="d-none d-md-block" />
            <Card.Body>
              <Card.Title>Total $ Available</Card.Title>
              <Card.Text>{userInfo.money}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Quick Actions</Card.Title>
              {/* Replace with actual links or buttons for account settings */}
              <Card.Text>Edit Profile</Card.Text>
              <Card.Text>Purchase History</Card.Text>
              <Card.Text>View Market</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Graph with Portfolio Performance</Card.Title>
              {/* Placeholder for graph component */}
              <div style={{ height: '300px', backgroundColor: '#f0f0f0' }}>
                Portfolio Performance Graph Here
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>List of Stocks You Own</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Stock</th>
                    <th>Shares</th>
                    <th>Current Price</th>
                    <th>Purchase Price</th>
                    <th>Change</th>
                    <th>Current Value</th>
                  </tr>
                </thead>
                <tbody>
                  {userInfo.shares && userInfo.shares.map((stock, index) => (
                    <tr key={index}>
                      <td>{stock.dino_name}</td>
                      <td>{stock.shares}</td>
                      <td>{stock.current_price}</td>
                      <td>{stock.price_at_purchase}</td>
                      <td className={(stock.current_price - stock.price_at_purchase).toFixed(2).startsWith('-') ? 'text-danger' : 'text-success'}> {(stock.current_price - stock.price_at_purchase).toFixed(2).startsWith('-') ? '↓' : '↑'}{(stock.current_price - stock.price_at_purchase).toFixed(2)}</td>
                      <td>{(stock.current_price * stock.shares).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OverviewPage;
