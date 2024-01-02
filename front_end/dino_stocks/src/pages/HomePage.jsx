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
              <h1>Invest in a Thriving Dinosaur Theme Park</h1>
              <p>
                Welcome to DinoStocks, where prehistoric meets the present in an exciting simulated stock market game! Dive into the thrilling world of finance with a unique twist – instead of traditional stocks, you'll be trading shares of dinosaurs! Our innovative platform allows you to buy, sell, and trade shares of various dinosaur species, each with its own market value driven by simulated market dynamics. Whether you're a seasoned investor or a curious beginner, DinoStocks offers a playful and educational experience. Watch as your dinosaur portfolio evolves, and strategize to make the most of the ever-changing market. Join DinoStocks today and embark on a financial journey where the roar of the dinosaurs echoes in every successful trade! Get ready to unleash your inner financial paleontologist and make history in the DinoStocks game.</p>
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
