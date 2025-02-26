import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './Porfolio';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
      <BrowserRouter>
        <ThemeProvider>
          <Portfolio />
        </ThemeProvider>
      </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
