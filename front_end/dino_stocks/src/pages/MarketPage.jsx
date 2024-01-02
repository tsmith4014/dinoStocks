import React from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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


  const fetchStockData = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/v1/stockmarket/`)
      setData(response.data)
    }
    catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  }
  useEffect(() => {
    fetchStockData();
  }, []);





  return (
    <Container fluid>
      <h1>Dino Stock Marketplace</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Dinosaur</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>% Change</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((stock, index) => (
            <tr key={index}>
              <td>{dinoImages[stock.dino_ticker] && <img className='marketImage' src={dinoImages[stock.dino_ticker]} />} <Link to={`stock/${stock.id}/`}>{stock.name}</Link> </td>
              <td>{stock.dino_ticker}</td>
              <td>${stock.price}</td>
              <td className={stock.change_point.startsWith('-') ? 'text-danger' : 'text-success'}>
                {stock.change_point.startsWith('-') ? '↓' : '↑'}{stock.change_point}
              </td>
              <td className={stock.change_percentage.startsWith('-') ? 'text-danger' : 'text-success'}>
                {stock.change_percentage}
              </td>
              <td>{stock.total_vol}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MarketPage;
