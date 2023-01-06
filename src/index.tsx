import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import BrowserRouter from react router;
import { BrowserRouter } from 'react-router-dom';

// importing store;p
import { setupStore } from 'redux-api/store';
/// import redux provider;
import { Provider } from 'react-redux';

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
