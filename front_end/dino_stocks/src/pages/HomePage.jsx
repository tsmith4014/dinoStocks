import { Container, Row, Col, Card } from 'react-bootstrap';
import heroImage from '../assets/images/heroImage.jpg';

const HomePage = () => {
  return (
    <Container fluid>
      {/* Hero Section */}
      <Row>
        <Col>
          <div className="image-overlay-container">
            <img src={heroImage} className="img-fluid" alt="Baseball field" />
            <div className="overlay-text">
              <h1>Welcome to Dino Stocks</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quo vitae non cupiditate incidunt, autem odit deserunt at dicta, dolore, nihil repellendus atque harum sequi fugit! Expedita deleniti explicabo aliquid.</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Features Section */}
      <Row>
        <Col>
          <Container fluid id="features">
            <h2>Features</h2>
            <Row className="d-flex align-items-stretch">
              <Col>
                <Card className="h-100">
                  <Card.Img variant="top" src="https://picsum.photos/300/200" />
                  <Card.Body>
                    <Card.Title>Feature 1</Card.Title>
                    <Card.Text>
                    insert info here
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Img variant="top" src="https://picsum.photos/300/200" />
                  <Card.Body>
                    <Card.Title>Feature 2</Card.Title>
                    <Card.Text>insert info here</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Img variant="top" src="https://picsum.photos/300/200" />
                  <Card.Body>
                    <Card.Title>Feature 3</Card.Title>
                    <Card.Text>insert info here</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
