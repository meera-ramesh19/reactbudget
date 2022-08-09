import ShowTransactions from '../Components/show/ShowTransactions';
import { motion } from "framer-motion"
import './Show.css';

const Show = () => {
  return (
    <motion.div
      style={{
        textAlign: 'center',
        backgroundColor: '#96DED1',
        height: '100vh',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ShowTransactions />
    </motion.div>
  );
};

export default Show;
