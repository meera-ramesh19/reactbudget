import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
      <div>
        <h6>Item Name:{transaction.date}</h6>
        <h6>Date:{transaction.date}</h6>
        <h6> From:{transaction.from}</h6>
        <h6> Amount: {transaction.amount}</h6>
        <h6>Category :{transaction.category}</h6>
        <h6>Type :{transaction.type}</h6>
      </div>
      <div className='showNavigation'>
        <div>
          {' '}
          <Link to={`/transactions`}>
            <button>Back to Transactions</button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit Transaction</button>
          </Link>
        </div>
        <div>
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
