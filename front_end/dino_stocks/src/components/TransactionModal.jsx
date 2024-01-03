import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const TransactionModal = ({ show, handleClose, shareId, fetchPortfolio, token, isOwned, transactionType, modalTitle }) => {
  const [sharesAmount, setSharesAmount] = useState(1);

  const handleTransaction = async (e) => {
    e.preventDefault();
    if (token && shareId && sharesAmount > 0) {
      try {
        let endpoint = '';
        let method = '';
        let data = {};
  
        if (transactionType === 'sell') {
          // Selling shares (PUT request to an existing share)
          endpoint = `${shareId}/`;
          method = 'put';
          data = { sell: true, shares: sharesAmount };
        } else if (isOwned) {
          // Buying additional shares (PUT request to an existing share)
          endpoint = `${shareId}/`;
          method = 'put';
          data = { buy: true, shares: sharesAmount };
        } else {
          // Buying new shares (POST request)
          endpoint = "";
          method = 'post';
          data = { ticker: shareId, shares: sharesAmount }; 
        }
  
        const response = await axios({
          method: method,
          url: `http://127.0.0.1:8000/api/v1/shares/${endpoint}`,
          data: data,
          headers: {
            Authorization: `Token ${token}`
          }
        });
        console.log("Request Data:", method, endpoint, data);

        if (response.status === 204 || response.status === 201) {
          // Handle successful transaction
          handleClose();
          fetchPortfolio(); // Refresh the portfolio data
        }
      } catch (error) {
        console.error("Error with transaction:", error.response ? error.response.data : error);
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleTransaction}>
          <Form.Group>
            <Form.Label>{transactionType === 'buy' ? 'Number of Shares to Buy' : 'Number of Shares to Sell'}</Form.Label>
            <Form.Control
              type="number"
              value={sharesAmount}
              onChange={(e) => setSharesAmount(e.target.value)}
              min="1"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {transactionType === 'buy' ? 'Buy' : 'Sell'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TransactionModal;
