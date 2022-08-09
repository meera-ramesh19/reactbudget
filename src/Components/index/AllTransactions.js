import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllTransactions.css';
import moment from 'moment';

const API = process.env.REACT_APP_API_URL;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error('catch', e));
  }, []);

  const balance = transactions.reduce(
    (acc, cur) =>
      cur.sourcetype === 'expense'
        ? acc - Number(cur.amount)
        : acc + Number(cur.amount),
    0
  );

  const transactionsList = transactions.map((transaction, index) => {
    return (
      <li className='transaction-list' key={index}>
        <p>{transaction.id}</p>
        <p>{`${moment(transaction.userDate).format('DD MMM YYYY')}`}</p>
        <Link to={`/transactions/${transaction.id}`}>
          <p>{transaction.itemName}</p>
        </Link>

        <p>${`${transaction.amount}`}</p>
      </li>
    );
  });

  return (
    <div className='Transactions'>
      <h2 style={{ textAlign: 'center' }}>
        Account Balance:
        <span
          style={{
            textalign: 'center',
            color: `${
              balance >= 1000 ? 'green' : balance >= 0 ? 'white' : 'red'
            }`,
          }}
        >
          {`$${balance}`}
        </span>
      </h2>

      <h2 style={{ textAlign: 'center', margin: '2rem auto' }}>
        Transaction Statements
      </h2>
      <div className='list-header'>
        <span>Id</span>
        <span>Date</span>
        <span>Item Name</span>
        <span>Amount</span>
      </div>
      <ul className='display-list'>{transactionsList}</ul>
    </div>
  );
};

export default Transactions;
