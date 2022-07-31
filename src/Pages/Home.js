import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='home'
      style={{ backgroundColor: '#96DED1', minHeight: '100vh' }}
    >
      <h1 style={{ color: 'green', margin: '6rem auto', textAlign: 'center' }}>
        TrackerLux
      </h1>
      <div className='home-header'>
        <p>Explore TrackerLux to help you manage your finances.</p>
      </div>
    </motion.div>
  );
};

export default Home;
