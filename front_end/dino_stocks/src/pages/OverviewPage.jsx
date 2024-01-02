import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import PortfolioLineChart from '../components/PortfolioLineChart';
import axios from 'axios';
import TransactionModal from '../components/TransactionModal';
import { useOutletContext, useParams } from 'react-router-dom';

const OverviewPage = () => {
  const [userInfo, setUserInfo] = useState([])
  const [portfolioData, setPortfolioData] = useState([])
  const [dailyAveragePortfolio, setDailyAveragePortfolio] = useState([])
  const [showDaily, setShowDaily] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [selectedShareId, setSelectedShareId] = useState(null);
  const [isOwned, setIsOwned] = useState(false);
  const token = localStorage.getItem("token");
  const [transactionType, setTransactionType] = useState('buy');
  const [modalTitle, setModalTitle] = useState('Buy Shares');
  const [image,setImage]=useState("")
  const {portfolioValue}=useOutletContext()
  const [levelTitle,setLevelTitle]= useState("")

  // Function to handle buying shares
  // If the stock is already owned, pass the share ID for PUT request
  // If the stock is not owned, pass the ticker symbol for POST request
  const handleBuy = (idOrTicker, alreadyOwned) => {
    setSelectedShareId(idOrTicker);
    setIsOwned(alreadyOwned);
    setTransactionType('buy');
    setModalTitle('Buy Shares');
    setShowModal(true);
  };


  // Function to handle selling shares
  const handleSell = (shareId) => {
    setSelectedShareId(shareId);
    setIsOwned(true);
    setTransactionType('sell');
    setModalTitle('Sell Shares');
    setShowModal(true);
  };

  const fetchPortfolio = async () => {
    if (token) {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/portfolio/`, {
          headers: { Authorization: `Token ${token}` }
        });

        // Add 'alreadyOwned' property to each share
        const updatedShares = response.data.shares.map(share => ({
          ...share,
          alreadyOwned: true
        }));

        setUserInfo({ ...response.data, shares: updatedShares });

        // Group data by date
        const groupedData = response.data.historicals.reduce((result, entry) => {
          const date = entry.time_stamp.split('T')[0];
          if (!result[date]) {
            result[date] = [];
          }
          result[date].push(entry);
          return result;
        }, {});

        // Calculate daily averages
        const dailyAverages = Object.keys(groupedData).map((date) => {
          const entries = groupedData[date];
          const totalPortfolioValue = entries.reduce((sum, entry) => sum + parseFloat(entry.portfolio_value), 0);
          const portfolio_value = (totalPortfolioValue / entries.length).toFixed(2);

          return {
            date,
            portfolio_value
          };
        });

        const transformedData = response.data.historicals.map(({ time_stamp, portfolio_value }) => ({
          date: time_stamp,
          portfolio_value,
        }));


        setPortfolioData(transformedData)
        setDailyAveragePortfolio(dailyAverages)
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    }

  }
  useEffect(() => {
    const fetchData = async () => {
      await fetchPortfolio();
      imageSelector()
    };

    fetchData();
  }, []);


  const handleToggleChart = () => {
    setShowDaily((prevShowDailyAverage) => !prevShowDailyAverage);
  };

  const imageSelector = () =>{
    console.log(portfolioValue)
    if (portfolioValue <= 10000 && portfolioValue<50000){
      setImage("/Velociraptor.png")
      setLevelTitle("Velociraptor")
    }
    if (portfolioValue >=50000 && portfolioValue<100000){
      setImage("/TriceratopsPFP.png")
      setLevelTitle("Triceratops")
    }
    if (portfolioValue >= 100000 && portfolioValue<250000){
      setImage("/StegasaurusPFP.png")
      setLevelTitle("Stegasaurus")
    }
    if (portfolioValue >= 250000 && portfolioValue<500000){
      setImage("/SpinosaurusPFP.png")
      setLevelTitle("Spinosaurus")
    }
    if (portfolioValue >= 500000 && portfolioValue<1000000){
      setImage("/T-RexPFP.png")
      setLevelTitle("T-Rex")
    }
    if (portfolioValue >= 1000000){
      setImage("/BrachiosaurusPFP.png")
      setLevelTitle("Brachiosaurus")
    }
  }



  return (
    <Container fluid>
      <Row className="my-4">
        <Col md={3}>
          <Card className="mb-3">
            <Card.Img variant="top" src={image} className="d-none d-md-block" />
            <Card.Body>
              <Card.Title>Level : {levelTitle}</Card.Title>
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
              <Card.Title>Portfolio Performance      <Button onClick={handleToggleChart} variant="primary">
                {showDaily ? 'Show Hourly' : 'Show Daily'}
              </Button></Card.Title>

              <div >

                {showDaily ? <PortfolioLineChart data={dailyAveragePortfolio} /> : <PortfolioLineChart data={portfolioData} />}

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
                    <th>Buy / Sell</th>
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
                      <td>
                        <Button onClick={() => handleBuy(stock.alreadyOwned ? stock.id : stock.ticker, stock.alreadyOwned)} variant="success">Buy More</Button>
                        <Button onClick={() => handleSell(stock.id, true)} variant="danger">Sell</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <TransactionModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        shareId={selectedShareId}
        fetchPortfolio={fetchPortfolio}
        token={token}
        isOwned={isOwned}
        transactionType={transactionType}
        modalTitle={modalTitle}
      />
    </Container>
  );
};

export default OverviewPage;
