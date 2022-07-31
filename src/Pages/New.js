import NewTransaction from '../Components/new/NewTransaction';
import {motion} from 'framer-motion';

const New = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}style={{backgroundColor:'#96DED1', height: '100vh'}}>
      <h2 style={{textAlign:'center'}}>New Transaction</h2>
      <NewTransaction />
    </motion.div>
  );
};

export default New;
