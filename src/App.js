import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import BestTrucks from './components/BestTrucks/BestTrucks';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import DetailsCard from './components/DetailsCard/DetailsCard';
import NotFound from './components/NotFound/NotFound';
import MyLikes from './components/MyLikes/MyLikes';
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import './App.css';
import './Tipografia.css';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route element={<PrivateRoute />}>
            <Route path='/catalog/:objectId' element={<DetailsCard />} />
            <Route path='/my-likes' element={<MyLikes />} />
            <Route path='/my-likes/:objectId' element={<DetailsCard />} />
          </Route>
          <Route path='/best-trucks' element={<BestTrucks />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
