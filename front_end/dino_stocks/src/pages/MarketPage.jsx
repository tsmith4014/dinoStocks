import React from 'react';
import { Container, Table } from 'react-bootstrap';

const MarketPage = () => {
  // mock data for the stocks table
  const mockStockData = [
    { company: 'TyrannoTech Inc', symbol: 'TYR', price: '67.43', change: '+2.34', percentChange: '+3.59%', volume: '1,234,567' },
    { company: 'VelociCloud Systems', symbol: 'VCS', price: '52.12', change: '-0.78', percentChange: '-1.47%', volume: '987,654' },
    { company: 'Bronto Energy Corp', symbol: 'BEC', price: '45.65', change: '+1.45', percentChange: '+3.28%', volume: '543,210' },
    { company: 'Stegosoft', symbol: 'STG', price: '38.77', change: '+0.55', percentChange: '+1.44%', volume: '456,789' },
    { company: 'PteroDynamics', symbol: 'PTD', price: '89.54', change: '+4.23', percentChange: '+4.96%', volume: '123,456' },
    { company: 'Tricera Capital', symbol: 'TRC', price: '76.32', change: '+0.62', percentChange: '+0.82%', volume: '654,321' },
    { company: 'Ankylo Assets', symbol: 'ANK', price: '68.99', change: '-1.07', percentChange: '-1.53%', volume: '321,654' },
    { company: 'Diplodoc Data', symbol: 'DPD', price: '92.73', change: '+3.42', percentChange: '+3.83%', volume: '789,012' },
    { company: 'CeratoSoft', symbol: 'CSF', price: '48.16', change: '-2.31', percentChange: '-4.58%', volume: '890,123' },
    { company: 'Saurian Studios', symbol: 'SSD', price: '58.21', change: '+1.76', percentChange: '+3.12%', volume: '210,987' },
  ];

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
          {mockStockData.map((stock, index) => (
            <tr key={index}>
              <td>{stock.company}</td>
              <td>{stock.symbol}</td>
              <td>${stock.price}</td>
              <td className={stock.change.startsWith('-') ? 'text-danger' : 'text-success'}>
                {stock.change.startsWith('-') ? '🔻' : '🔺'}{stock.change}
              </td>
              <td className={stock.percentChange.startsWith('-') ? 'text-danger' : 'text-success'}>
                {stock.percentChange}
              </td>
              <td>{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MarketPage;
