import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { fetchTrucks } from './redux/features/trucksSlice';
import { AuthenticationProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchTrucks());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthenticationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthenticationProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
