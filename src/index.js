import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import ScrollToTop from "./ScrollToTop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <Provider store={store}>
    <ScrollToTop/>
      <App />
      <ToastContainer />
    </Provider>
    </UserProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
