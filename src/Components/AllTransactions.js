import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllTransactions.css';
import moment from 'moment';
const API = process.env.REACT_APP_API_URL;

const Transactions = () => {
  // eslint-disable-next-line
  const [transactions, setTransactions] = useState([]);
  //   const [totalBalance, seTotalBalance] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error('catch', e));
  }, []);

  const balance = transactions.reduce(
    (acc, cur) =>
      cur.type === 'expense'
        ? acc - Number(cur.amount)
        : acc + Number(cur.amount),
    0
  );

  const transactionsList = transactions.map((transaction, index) => {
    return (
      <li className='transaction-list' key={index}>
        {/* showing error when L i used <p>{`${moment(transaction.date).format('l')}`}</p> */}
        <p>{`${moment(transaction.date).format('MMM Do YYYY')}`}</p>
        <Link to={`/transactions/${index}`}>
          <p>{transaction.itemName}</p>
        </Link>
        {/* <p>{transaction.category}</p> */}
        <p>${`${transaction.amount}`}</p>
      </li>
    );
  });

  return (
    <section className='Transactions'>
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
        <span>Date</span>
        <span>Item Name</span>
        <span>Amount</span>
      </div>
      <ul className='display-list'>{transactionsList}</ul>
    </section>
  );
};

export default Transactions;
