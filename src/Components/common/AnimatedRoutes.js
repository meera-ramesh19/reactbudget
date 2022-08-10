import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

// PAGES
import FourOFour from '../../Pages/FourOFour';
import Home from '../../Pages/Home';
import Index from '../../Pages/Index';
import Chart from '../../Pages/Chart';
import New from '../../Pages/New';
import Show from '../../Pages/Show';
import Edit from '../../Pages/Edit';

//This component to define navbar animate tranisitons
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />

            <Route path='/transactions' element={<Index />} />
            <Route path='/new' element={<New />} />
            <Route path='/transactions/:id' element={<Show />} />
            <Route path='/transactions/:id/edit' element={<Edit />} />
            <Route path='/chart' element={<Chart />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AnimatedRoutes;
