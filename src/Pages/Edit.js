import UpdateTransaction from '../Components/edit/UpdateTransaction';
import { motion } from 'framer-motion';

const Edit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: 'center',
        backgroundColor: '#96DED1',
        height: '100vh',
      }}
    >
      <h2>Edit</h2>
      <UpdateTransaction />
    </motion.div>
  );
};

export default Edit;
