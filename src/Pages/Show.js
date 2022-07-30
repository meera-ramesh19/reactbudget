import ShowTransactions from '../Components/show/ShowTransactions';

import './Show.css';
const Show = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#96DED1',
        height: '100vh',
      }}
    >
      <ShowTransactions />
    </div>
  );
};

export default Show;
