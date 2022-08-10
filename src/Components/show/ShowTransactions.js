import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ShowTransactions.css';
import Swal from 'sweetalert2';
import moment from 'moment';

const API = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([]);

  let navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/api/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
        console.log(transaction);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate, transaction]);

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
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/api/transactions/${id}`)
      .then(() => {
        deleteConfirmationBox();
        navigate('/transactions');
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
      <div className='cards'>
        <p>
          Id:
          <span className='items'>{transaction.id}</span>
        </p>
        <p>
          Item Name:<span className='items'>{transaction.itemName}</span>
        </p>
        <p>
          Date:
          <span className='items'>{`${moment(transaction.userDate).format(
            ' MMM DD YYYY'
          )}`}</span>
        </p>
        <p>
          From: <span className='items'>{transaction.from}</span>
        </p>
        <p>
          Amount: <span className='items'>{transaction.amount}</span>
        </p>
        <p>
          Category :<span className='items'>{transaction.category}</span>
        </p>
        <p>
          Type :<span className='items'>{transaction.sourcetype}</span>
        </p>
      </div>

      <div className='showNavigation'>
        <div>
          {' '}
          <Link to={'/transactions'}>
            <button className='show-btns'>Back </button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/transactions/${id}/edit`}>
            <button className='show-btns'>Edit </button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={'/transactions'}>
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
