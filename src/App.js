// DEPENDENCIES
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Chart from './Pages/Chart';

// COMPONENTS
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className='App'>
      <main>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<Index />} />
          <Route path='/transactions/new' element={<New />} />
          <Route path='/transactions/:index' element={<Show />} />
          <Route path='/transactions/:index/edit' element={<Edit />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='*' element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
