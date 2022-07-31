import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ShowTransactions.css';
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

  //toast from sweetalert2 
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

  //Delete functions
  const deleteConfirmationBox = () => {
    document.querySelector('.second').addEventListener('click', function () {
      toastMixin.fire({
        animation: true,
        title: 'Successfully Deleted',
      });
    });
    navigate('/transactions');
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        deleteConfirmationBox();
      })
      .catch((e) => console.error(e));
  };


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


  return (
    <article>
      <h2 style={{ marginBottom: '6rem' }}>Transaction Details</h2>
      <div className="cards">
        <p>
          Item Name:<span className='items'>{transaction.itemName}</span>
        </p>

        <p>Date:<span className='items'>{transaction.date}</span></p>
        <p>From: <span className='items'>{transaction.from}</span></p>
        <p>Amount: <span className='items'>{transaction.amount}</span></p>
        <p>Category :<span className='items'>{transaction.category}</span></p>
        <p>Type :<span className='items'>{transaction.type}</span></p>
      </div>

      <div className='showNavigation'>
        <div>
          {' '}
          <Link to={`/transactions`}>
            <button className='show-btns'>Back </button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/transactions/${index}/edit`}>
            <button className='show-btns'>Edit </button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/transactions`}>
            <button className='show-btns' onClick={confirmDelete}>
            <button style={{ border: 'none' }} className='second'></button>
              Delete
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TransactionDetails;
