import { useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

const NewTransaction = () => {
  const [transaction, setTransaction] = useState({
    transId: '',
    itemName: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
    type: '',
  });

  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('Expense');

  const navigate = useNavigate();

  const onChangeValue = (event) => {
    setType(event.target.value);
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
    setTransaction({
      ...transaction,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //use v4,ulid or nanoid instead of uuidv4 which is deprecated
    let id = nanoid(); //to generate uniqeue ids
    const newTransaction = {
      transId: id,
      itemName: itemName,
      amount: Number(amount),
      date: date,
      from: from,
      category: category,
      type: type,
    };
    axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((c) => console.error('catch', c));
  };

  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='itemName'>itemName:</label>
        <input
          id='itemName'
          name='itemName'
          value={transaction.itemName}
          type='text'
          onChange={onInputChange}
          placeholder='Item Name'
          required
        />
        <label htmlFor='from'>From:</label>
        <input
          id='from'
          name='from'
          type='text'
          required
          value={transaction.from}
          placeholder='from'
          onChange={onInputChange}
        />
        <label htmlFor='amount'>Amount:</label>
        <input
          id='amount'
          type='number'
          name='amount'
          value={transaction.amount}
          placeholder='amount'
          onChange={onInputChange}
        />
        <label htmlFor='date'>Date:</label>
        <input
          id='date'
          type='date'
          name='date'
          value={transaction.date}
          onChange={onInputChange}
        />
        <label htmlFor='category'>Category:</label>
        <input
          id='category'
          type='category'
          name='category'
          value={transaction.category}
          onChange={onInputChange}
        />

        <div>
          <input
            type='radio'
            name='type'
            value='income'
            id='expenses'
            checked={type === 'income'}
            onChange={onChangeValue}
          />
          Income
          <input
            type='radio'
            value='expenses'
            id='expenses'
            name='type'
            checked={type === 'expenses'}
            onChange={onChangeValue}
          />
          Expense
        </div>

        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default NewTransaction;
