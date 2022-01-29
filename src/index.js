import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import App from './App';
import PageA from './PageA';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<PageA />} />
      </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
