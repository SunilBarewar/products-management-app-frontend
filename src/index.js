import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Context from './context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);


