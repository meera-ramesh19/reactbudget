import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <h1 style={{ color: 'green', margin: '6rem auto', textAlign: 'center' }}>
        TrackerLux
      </h1>
      <div className='home-header'>
        <p>Explore TrackerLux to help you manage your finances.</p>
      </div>
    </div>
  );
};

export default Home;
