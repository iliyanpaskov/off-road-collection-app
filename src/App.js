import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import BestTrucks from './components/BestTrucks/BestTrucks';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import DetailsCard from './components/DetailsCard/DetailsCard';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import './Tipografia.css';
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' >
            <Route element={<PrivateRoute />}>
              <Route index element={<Catalog />} />
              <Route path=':objectId' element={<DetailsCard />} />
            </Route>
          </Route>
          <Route path='/best-trucks' element={<BestTrucks />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />


        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
