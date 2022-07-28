import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card'

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
      <div className="center-card">
        {/* <h6>Item Name:{transaction.itemName}</h6>
        <h6>Date:{transaction.date}</h6>
        <h6> From:{transaction.from}</h6>
        <h6> Amount: {transaction.amount}</h6>
        <h6>Category :{transaction.category}</h6>
        <h6>Type :{transaction.type}</h6> */}
        <Card style={{ width:'18rem' }}>
      <Card.Body>
        <Card.Title>Transaction Summary</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Item Name:{transaction.itemName}</Card.Subtitle>
        <Card.Text>
        Date:{transaction.date}
        </Card.Text>
        <Card.Text>
        From:{transaction.from}
        </Card.Text>
        <Card.Text>
        Amount: {transaction.amount}
        </Card.Text>
        <Card.Text>
        Category :{transaction.category}
        </Card.Text>
        <Card.Text>
        Type :{transaction.type}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='showNavigation'>
        <div >
          {' '}
          <Link to={`/transactions`}>
            <button>Back to Transactions</button>
          </Link>
        </div>
         <div >
          {' '}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit Transaction</button>
          </Link>
        </div> 
         <div >
          {' '}
          <Link to={`/transactions`}>
            <button onClick={handleDelete}>Delete Transactions</button>
          </Link>
        </div> 
      </div>
    </article>
  );
};

export default TransactionDetails;
