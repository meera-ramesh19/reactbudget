// DEPENDENCIES
import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// PAGES
// import Edit from './Pages/Edit';
// import FourOFour from './Pages/FourOFour';
// import Home from './Pages/Home';
// import Index from './Pages/Index';
// import New from './Pages/New';
// import Show from './Pages/Show';
// import Chart from './Pages/Chart';

// COMPONENTS
import NavBar from './Components/common/NavBar';
import Footer from './Components/common/Footer';
import AnimatedRoutes from './Components/common/AnimatedRoutes';

const App = () => {
  return (
    <div className='App'>
      <main>
        <NavBar />
        <AnimatedRoutes />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<Index />} />
          <Route path='/transactions/new' element={<New />} />
          <Route path='/transactions/:index' element={<Show />} />
          <Route path='/transactions/:index/edit' element={<Edit />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='*' element={<FourOFour />} />
        </Routes> */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
