import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const API = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([]);

  let navigate = useNavigate();

  let { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch(() => navigate('/not-found'));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <article>
      <div className='center-card'>
        <div className='card'>
          <h2>Transaction Details</h2>
          {/* <h6>Item Name:{transaction.itemName}</h6>
        <h6>Date:{transaction.date}</h6>
        <h6> From:{transaction.from}</h6>
        <h6> Amount: {transaction.amount}</h6>
        <h6>Category :{transaction.category}</h6>
        <h6>Type :{transaction.type}</h6> */}
          <Card className='border-0 mb-2'>
            <Card.Body>
              <Card.Title className=''>
                Item Name:{transaction.itemName}
              </Card.Title>
              <br />
              <Card.Subtitle>Date:{transaction.date}</Card.Subtitle>
              <Card.Text>From:{transaction.from}</Card.Text>
              <Card.Text>Amount: {transaction.amount}</Card.Text>
              <Card.Text>Category :{transaction.category}</Card.Text>
              <Card.Text>Type :{transaction.type}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='show-nav'>
        {' '}
        <Link className='links' to={`/transactions`}>
          <button>Back to Transactions</button>
        </Link>
      </div>
      <div>
        {' '}
        <Link className='links' to={`/transactions/${index}/edit`}>
          <button className='links'>Edit Transaction</button>
        </Link>
      </div>
      <div>
        {' '}
        <Link className='links' to={`/transactions`}>
          <button className='links' onClick={handleDelete}>
            Delete Transactions
          </button>
        </Link>
      </div>
    </article>
  );
};

export default TransactionDetails;
