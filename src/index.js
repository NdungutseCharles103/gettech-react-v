import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "tailboot/tailboot.css";
import './components/styles/responsive.css'
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css'
// import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

