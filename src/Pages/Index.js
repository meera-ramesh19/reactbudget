import AllTransactions from '../Components/index/AllTransactions';
import {motion} from 'framer-motion'

const Index = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className='Index' style={{ textAlign: 'center', backgroundColor: '#96DED1', height: '100vh' }}>
      
      <AllTransactions />
    </motion.div>
  );
};

export default Index;
