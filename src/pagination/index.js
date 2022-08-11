import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import FormData from './form';
import reportWebVitals from './reportWebVitals';
// import Ex1 from "./Ex1"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FormData />
    {/* <Ex1/> */}
  </React.StrictMode>
);

reportWebVitals();
