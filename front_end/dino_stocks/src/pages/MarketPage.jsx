import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionModal from '../components/TransactionModal';
import { useOutletContext } from 'react-router-dom';

const dinoImages = {
  "MICRO": "/microraptorcute.jpg",
  "PACHY": "/pachy.jpg",
  "CORY": "/cory.jpg",
  "PTERO": "/ptera.jpg",
  "PLESI": "/pleis.jpg",
  "DILO": "/dilop.jpg",
  "IGUA": "/iguanadon2.jpg",
  "PARA": "/Parasaurolophus.jpg",
  "TRI": "/tricera.jpg",
  "VELO": "/veloc.jpg",
  "SPINO": "/spino.jpg",
  "DEINO": "/Deinonychus.jpg",
  "TREX": "/trex2.jpg",
  "BRACH": "/brachia.jpg",
  "ARCH": "/Archaeopteryx.jpg",
  "ALLO": "/Allosaurus.jpg",
  "STEGO": "/stego.jpg",
  "APTO": "/Apatosaurus.jpg",
  "CARNO": "/Carnotaurus.jpg",
  "ANKY": "/Ankylosaurus.jpg"
}


const MarketPage = () => {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState({});
  const [isOwned, setIsOwned] = useState(false);
  const [selectedShareId, setSelectedShareId] = useState(null);
  const {portfolioValue, refreshUserData}=useOutletContext()



  const fetchStockData = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/v1/stockmarket/`)
      console.log(response)
      setData(response.data)
    }
    catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  }
  useEffect(() => {
    fetchStockData();
  }, []);

  const handleBuyClick = (stock) => {
    console.log('buy clicked', stock);
    // Determine if the user already owns this stock and get its ID
    const ownedShare = userInfo.shares.find(share => share.ticker === stock.ticker);
  
    setSelectedStock(stock);
    setIsOwned(!!ownedShare); // Set isOwned based on user's ownership
    setSelectedShareId(ownedShare?.id || stock.ticker); // Pass the ID of the owned share if it exists
    setShowModal(true);
  };
  

  const fetchPortfolio = async () => {
    if (token) {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/v1/portfolio/`, {
                headers: { Authorization: `Token ${token}` }
            });

            // Update the userInfo state
            console.log('Portfolio Data:', response.data);
            setUserInfo(response.data);
        } catch (error) {
            console.error("Error fetching portfolio:", error);
        }
    }
};

useEffect(() => {
  fetchPortfolio(); // Fetch portfolio data on component mount
}, []);

  return (
    <Container>
      <h1 className="dino-font text-center market-header">Dino Stock Marketplace</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Dinosaur</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>% Change</th>
            <th>Volume</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((stock, index) => (
            <tr key={index}>
              <td>{dinoImages[stock.dino_ticker] && <img className='marketImage' src={dinoImages[stock.dino_ticker]} />} <Link to={`stock/${stock.id}/`} className="stock-link">{stock.name}</Link> </td>
              <td>{stock.dino_ticker}</td>
              <td>${stock.price}</td>
              <td className={stock.change_point.startsWith('-') ? 'text-danger' : 'text-success'}>
                {stock.change_point.startsWith('-') ? '↓' : '↑'}{stock.change_point}
              </td>
              <td className={stock.change_percentage.startsWith('-') ? 'text-danger' : 'text-success'}>
                {stock.change_percentage}
              </td>
              <td >{stock.total_vol}</td>
              <td>
                <Button onClick={() => handleBuyClick(stock)} variant="success">Buy</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        <TransactionModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        shareId={selectedShareId}
        fetchPortfolio={fetchPortfolio}
        token={token}
        isOwned={isOwned} 
        transactionType="buy"
        refreshUserData={refreshUserData}
        modalTitle={`Buy ${selectedStock ? selectedStock.name : ''}`}
      />
    </Container>
  );
};

export default MarketPage;
