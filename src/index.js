import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { fetchTrucks } from './redux/features/trucksSlice';
import { fetchComments } from './redux/features/commentsSlice';
import { fetchLikes } from './redux/features/likesSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchTrucks());
store.dispatch(fetchComments());
store.dispatch(fetchLikes());
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
