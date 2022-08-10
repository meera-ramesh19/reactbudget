import { useState, useCallback, useRef } from 'react';
import axios from 'axios';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './NewTransaction.css';
import Swal from 'sweetalert2';

const API = process.env.REACT_APP_API_URL;

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const NewTransaction = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  //declare states
  const [transaction, setTransaction] = useState({
    itemName: '',
    amount: '',
    userDate: '',
    from: '',
    category: '',
    type: '',
  });

  // const [itemName, setItemName] = useState('');
  // const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState('');
  // const [from, setFrom] = useState('');
  // const [category, setCategory] = useState('');
  // const [type, setType] = useState('Expense');

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

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    console.log('here');
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  // const onChangeValue = (event) => {
  //   console.log(event.target.value);
  //   setType({  [event.target.id]: event.target.value });
  // };

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setTransaction({
      ...transaction,
      [event.target.id]: event.target.value,
    });
  };

  // const addTransaction = (transdetails) => {
  //   let details = [...transaction, transdetails];
  //   setTransaction(details);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/api/transactions`, transaction)
      .then(() => {
        document
          .querySelector('.second')
          .addEventListener('click', function () {
            toastMixin.fire({
              animation: true,
              title: 'Added a transaction',
            });
          });
        navigate(`/transactions`);
      })
      .catch((c) => console.error('catch', c));
  };

  return (
    <div className='add-trans'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='itemName'>Item Name: </label>
          <input
            id='itemName'
            type='text'
            value={transaction.itemName}
            onChange={handleTextChange}
            required
            placeholder='paycheck.'
          />
        </div>
        <div>
          <label htmlFor='amount'>Amount: </label>
          <input
            id='amount'
            type='number'
            required
            value={transaction.amount}
            onChange={handleTextChange}
            placeholder='Dollar Amount'
          />
        </div>
        <div>
          <label htmlFor='userDate'>Date: </label>
          <input
            id='userDate'
            type='date'
            // name='date'
            value={transaction.userDate}
            onChange={handleTextChange}
            required
            placeholder='date'
          />
        </div>
        <div>
          <label htmlFor='from'>From: </label>
          <input
            id='from'
            type='text'
            // name='from'
            onChange={handleTextChange}
            value={transaction.from}
            required
            placeholder='work....'
          />
        </div>
        <div>
          <label htmlFor='category'>Category: </label>
          <input
            id='category'
            type='text'
            // name='category'
            value={transaction.category}
            placeholder='food etc...'
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor='sourcetype'>Type: </label>
          <input
            id='sourcetype'
            type='text'
            // name='sourceType'
            value={transaction.sourcetype}
            placeholder='Enter Income or Expense'
            onChange={handleTextChange}
            required
          />
        </div>

        <br />
        <div className='add-btn'>
          <input className='new-btns' type='submit' onClick={fire} />
          <button style={{ border: 'none' }} className='second'></button>
          <Link
            style={{ margin: '0 auto', textAlign: 'center' }}
            to={`/transactions`}
          >
            <button className='new-btns'>Cancel </button>
          </Link>
        </div>
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      </form>
    </div>
  );
};

export default NewTransaction;
