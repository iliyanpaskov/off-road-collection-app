import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import BestTrucks from './components/BestTrucks/BestTrucks';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import './Tipografia.css';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/best-trucks' element={<BestTrucks />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
