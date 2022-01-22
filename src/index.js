import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScreenHome } from './routes/routehome';
import { ScreenFruits } from './routes/routefruits';
import { ScreenDetails } from './routes/routedetails';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/routedetails" element={<ScreenDetails />}/>
      <Route path="/routehome" element={<ScreenHome/>}/>
      <Route path="/routefruits" element={<ScreenFruits />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
