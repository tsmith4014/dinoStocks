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
                    <Card.Title>Buy and Sell Shares of Dinosaurs</Card.Title>
                    <Card.Text>
                      Our park currently has 20 different dinosaurs to invest in. Choose which dinosaurs you think will bring in the highest returns, strategically buying and selling shares to maximize your profits. From the mighty T-Rex to the swift Velociraptor, each dinosaur has its own market dynamics, creating an exhilarating experience as you navigate the evolving landscape of our dino-themed stock market. The choice is yours at DinoStocks – invest wisely, and let the roar of financial success echo through the Jurassic era!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Img variant="top" src="https://picsum.photos/300/200" />
                  <Card.Body>
                    <Card.Title>Watch Your Portfolio</Card.Title>
                    <Card.Text>
                      Observe the impact of your financial decisions as you track the growth or fluctuations of your dino-themed portfolio at DinoStocks. Our hourly updates provide insights into how your investment strategies shape the value of your shares. Whether your portfolio is soaring to new heights or facing a temporary dip, the dynamic nature of the market keeps the excitement alive. Keep a close eye on your investments, adjust your strategies on the fly, and experience the exhilarating journey of watching your dino-centric portfolio evolve throughout the day. At DinoStocks, every hourly rise and fall is a thrilling part of the financial adventure!</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Img variant="top" src="https://picsum.photos/300/200" />
                  <Card.Body>
                    <Card.Title>Visit the Dino Market</Card.Title>
                    <Card.Text>
                      Embark on a journey through DinoStocks' dynamic stock market, featuring 20 diverse dinosaurs, including the majestic Pterodactyl and the melodic Parasaurolophus. Our user-friendly interface provides real-time insights into pricing, change percentages, and point variations for every dino share in your portfolio. Stay tuned to the market dynamics, seize opportunities, and strategize your trades as you navigate the ever-evolving landscape of our prehistoric stock exchange. With a quick glance, you can assess the performance of each unique dinosaur, empowering you to make informed decisions and maximize your investment potential in this thrilling dino-themed financial adventure.</Card.Text>
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
