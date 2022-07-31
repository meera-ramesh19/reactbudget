import PageNotFound from '../Components/pagenotfound/PageNotFound.js';
import {motion} from 'framer-motion';

const FourOFour = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <PageNotFound />
    </motion.div>
  );
};
export default FourOFour;
