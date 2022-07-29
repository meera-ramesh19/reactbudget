import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

const UpdateTransaction = () => {
  let { index } = useParams();

  // const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    transId: '',
    itemName: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
    type: '',
  });

  // const [itemName, setItemName] = useState('');
  // const [amount, setAmount] = useState('');
  // const [from, setFrom] = useState('');
  // const [date, setDate] = useState('');
  // const [category, setCategory] = useState('');
  const [type, setType] = useState('Expense');

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
        // setItemName(res.data.itemName);
        // setAmount(res.data.amount);
        // setFrom(res.data.from);
        // setDate(res.data.date);
        // setCategory(res.data.category);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const onRadioValue = (event) => {
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
    // updateTransaction(transaction);
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((c) => console.warn('catch', c));
  };

  return (
    <div className='edit-trans'>
      <form onSubmit={handleSubmit}>
        <div>
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
        </div>
        <div>
          <label htmlFor='amount'>Amount:</label>
          <input
            id='amount'
            type='number'
            name='amount'
            value={transaction.amount}
            placeholder='amount'
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='date'>Date:</label>
          <input
            id='date'
            type='date'
            name='date'
            value={transaction.date}
            onChange={onInputChange}
          />
        </div>
        <div>
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
        </div>
        <div>
          <label htmlFor='category'>Category:</label>
          <input
            id='category'
            type='category'
            name='category'
            value={transaction.category}
            onChange={onInputChange}
          />
        </div>

        <div>
          <input
            type='radio'
            name='type'
            value='income'
            id='income'
            checked={type === 'income'}
            onChange={onRadioValue}
          />
          Income
          <input
            type='radio'
            value='expense'
            id='expense'
            name='type'
            checked={type === 'expense'}
            onChange={onRadioValue}
          />
          Expense
        </div>

        <div className='edit-btn'>
          <input type='submit' />

          <Link to={`/transactions/${index}`}>
            <button>Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateTransaction;
