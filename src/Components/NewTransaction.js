import { useState, useCallback,useRef} from 'react';
import axios from 'axios';
import ReactCanvasConfetti from "react-canvas-confetti";
import { useNavigate, useParams, Link } from 'react-router-dom';
import './NewTransaction.css';


const API = process.env.REACT_APP_API_URL;

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

const NewTransaction = () => {
  const [transaction, setTransaction] = useState({
    itemName: '',
    amount: '',
    date: '',
    from: '',
    category: '',
    type: '',
  });

 
  const [type, setType] = useState('Expense');

  const navigate = useNavigate();
  let { index } = useParams();

  const onChangeValue = (event) => {
    setType(event.target.value);
  };

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setTransaction({
      ...transaction,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((c) => console.error('catch', c));
  };

  // const onClick = useCallback(() => {
  //   confetti({
  //     particleCount: 150,
  //     spread: 60,
  //   });
  // }, []);


  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);
 

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
          <label htmlFor='date'>Date: </label>
          <input
            id='date'
            type='date'
            name='date'
            value={transaction.date}
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
            name='category'
            value={transaction.category}
            placeholder='food etc...'
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <input
            type='radio'
            name='type'
            value='income'
            id='income'
            checked={type === 'income'}
            onChange={onChangeValue}
          />
          <label style={{ padding: '0 0.5rem' }}>Income</label>
          <span></span>
          <input
            type='radio'
            value='expense'
            id='expense'
            name='type'
            checked={type === 'expense'}
            onChange={onChangeValue}
          />
          Expense
        </div>

        <br />
        <div className='add-btn'>
          <input type='submit' onClick={fire} />
          <Link
            style={{ margin: '0 auto', textAlign: 'center' }}
            to={`/transactions/${index}`}
          >
            <button>Cancel </button>
          </Link>
        
        </div>
      </form>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>

  );
};

export default NewTransaction;
