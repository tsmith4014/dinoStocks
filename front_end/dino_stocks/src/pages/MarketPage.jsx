import React from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const MarketPage = () => {
const [data,setData]=useState([])


  const fetchStockData = async ()=>{
      try {
      let response = await axios.get(`http://127.0.0.1:8000/api/v1/stockmarket/`)
      setData(response.data)
      }
   catch (error) {
    console.error("Error fetching portfolio:", error);
  }}
  useEffect(() => {
    fetchStockData();
  }, []); 
   
   console.log(data)
  

  return (
    <Container fluid>
      <h1>Dino Stock Marketplace</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Company Name</th>
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
              <td>{stock.name}</td>
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
