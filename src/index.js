import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Articles from "./xyz/com/Articles"
// import Formik2 from "./form/Formik"
// import Counter from './counter/Counter';
// import Ex1 from './pagination/Ex1';
// import P1 from './pagination/P1';
// import ComponentPaginate from './pagination/ComponentPaginate';
// import Remove_item from './remove-item/remove-item';
// import TableData from "./form/tableform"
// import App2 from './form-crud/App';
// import YupForm from './Yup-Form/YupForm';
import FileUpload from './form/FileUpload';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Articles/> */}
{/* <Formik2 /> */}
{/* <Counter /> */}
{/* <Ex1 /> */}
{/* <P1/> */}
{/* <Remove_item></Remove_item> */}
{/* <ComponentPaginate /> */}
{/* <TableData /> */}
{/* <App2/> */}
{/* <YupForm /> */}
<FileUpload />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
