import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';

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

  var toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const confirmDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error(e));
    document.querySelector('.second').addEventListener('click', function () {
      toastMixin.fire({
        animation: true,
        title: 'Successfully Deleted',
      });
    });
  };

  return (
    <article>
      <div className='center-card'>
        <div className='card'>
          <h2>Transaction Details</h2>

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
          <button className='show-btns'>Back to Transactions</button>
        </Link>
      </div>
      <div>
        {' '}
        <Link className='links' to={`/transactions/${index}/edit`}>
          <button className='show-btns'>Edit Transaction</button>
        </Link>
      </div>
      <div>
        {' '}
        <Link className='links' to={`/transactions`}>
          <button className='show-btns' onClick={confirmDelete}>
            Delete Transactions
          </button>
        </Link>
      </div>
    </article>
  );
};

export default TransactionDetails;
