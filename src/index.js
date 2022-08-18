import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import './index.css';
// import App from './App';

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
// import FileUpload from './form/FileUpload';
// import DynamicForm from './form/DynamicForm';
// import AddMoreField from './form/AddMoreField';
// import Dynamic2 from './form/Dynamic2';
// import EcommerceRegistration from "./Fileupload/FileUpload"
import FormMyData from './Custom-form/FormMyData';
import { formData } from './Custom-form/MyJsonData';


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
{/* <FileUpload /> */}
{/* <FileUpload /> */}
{/* <DynamicForm /> */}
{/* <AddMoreField /> */}
{/* <Dynamic2></Dynamic2> */}
{/* <EcommerceRegistration /> */}
<FormMyData formData={formData} /> 
  </React.StrictMode>
);


reportWebVitals();
