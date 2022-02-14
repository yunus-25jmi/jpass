import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>

      </Routes>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
