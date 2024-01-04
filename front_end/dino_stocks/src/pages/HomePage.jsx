import { Container, Row, Col, Card } from 'react-bootstrap';
import heroImage from '../assets/images/heroImage.jpg';

const HomePage = () => {
  return (
    <Container className="custom-max-width">
      {/* Hero Section */}
      <Row>
        <Col>
          <div className="image-overlay-container">
            <img src={heroImage} className="img-fluid" alt="plants" />
            <div className="overlay-text">
              <h1>Welcome to Dino Stocks</h1>
              <p>
              Invest in a Thriving Dinosaur Theme Park, where prehistoric meets the present in an exciting simulated stock market game! Dive into the thrilling world of finance with a unique twist – instead of traditional stocks, you'll be trading shares of dinosaurs! </p>
            </div>
          </div>
        </Col>
      </Row>

            {/* Features Section */}
      <Container fluid id="features">
        <h2>Features</h2>
        
         {/* First Feature */}
         <Card className="mb-3">
          <Row className="g-0">
            <Col md={6} className="d-flex align-items-center card-image-container">
              <Card.Img variant="left" src="/stockmarket.jpg" className="img-fluid feature-image" />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title>Buy and Sell Shares of Dinosaurs</Card.Title>
                <Card.Text>
                  Our park currently has 20 different dinosaurs to invest in. Choose which dinosaurs you think will bring in the highest returns, strategically buying and selling shares to maximize your profits. From the mighty T-Rex to the swift Velociraptor, each dinosaur has its own market dynamics, creating an exhilarating experience as you navigate the evolving landscape of our dino-themed stock market. The choice is yours at DinoStocks – invest wisely, and let the roar of financial success echo through the Jurassic era!
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        {/* Second Feature - Reversed */}
        <Card className="mb-3">
          <Row className="g-0">
            <Col md={6} >
              <Card.Body>
                <Card.Title>Watch Your Portfolio</Card.Title>
                <Card.Text>
                  Observe the impact of your financial decisions as you track the growth or fluctuations of your dino-themed portfolio at DinoStocks. Our hourly updates provide insights into how your investment strategies shape the value of your shares. Whether your portfolio is soaring to new heights or facing a temporary dip, the dynamic nature of the market keeps the excitement alive. Keep a close eye on your investments, adjust your strategies on the fly, and experience the exhilarating journey of watching your dino-centric portfolio evolve throughout the day. At DinoStocks, every hourly rise and fall is a thrilling part of the financial adventure!
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center card-image-container">
              <Card.Img src="/chart.png" className="img-fluid feature-image" />
            </Col>
          </Row>
        </Card>


        {/* Third Feature */}
        <Card className="mb-3">
          <Row className="g-0">
            <Col md={6} className="d-flex align-items-center card-image-container">
              <Card.Img variant="left" src="/buystocks.jpg" className="img-fluid feature-image" />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title>Visit the Dino Market</Card.Title>
                <Card.Text>
                  Embark on a journey through DinoStocks' dynamic stock market, featuring 20 diverse dinosaurs, including the majestic Pterodactyl and the melodic Parasaurolophus. Our user-friendly interface provides real-time insights into pricing, change percentages, and point variations for every dino share in your portfolio. Stay tuned to the market dynamics, seize opportunities, and strategize your trades as you navigate the ever-evolving landscape of our prehistoric stock exchange. With a quick glance, you can assess the performance of each unique dinosaur, empowering you to make informed decisions and maximize your investment potential in this thrilling dino-themed financial adventure.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </Container>
  );
};

export default HomePage;