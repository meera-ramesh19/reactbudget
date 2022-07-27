import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

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
  const sign = balance < 0?'-':''
  const transactionsList = transactions.map((transaction, index) => {
    return (
      <li className="transaction-li" key={index}>
        <p>{transaction.date}</p>
        <Link to={`/transactions/${index}`}>
          <p>{transaction.itemName}</p>
        </Link>
        <p>${`${sign}${transaction.amount}`}</p>
      </li>
    );
  });



  return (
    <section className='Transactions'>
      <h2>Account Balance:</h2>
      <span
        style={{
          textalign: 'center',
          color: `${
            balance >= 1000 ? 'green' : balance >= 0 ? 'white' : 'red'
          }`,
        }}
      >
        
        {`$${sign}${balance}`}
      </span>

      <ul className=''>{transactionsList}</ul>
    </section>
  );
};

export default Transactions;
