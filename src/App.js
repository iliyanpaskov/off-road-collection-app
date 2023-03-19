import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import './App.css';
import './Tipografia.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
