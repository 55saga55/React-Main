import React from 'react'
import { Formik , Form , Field} from 'formik'; 
import axios from "axios";

export default function Formik2() {
  return (
    <div>
    <Formik
      initialValues={{
        title:"",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true
      }}

      onSubmit={ (values) => {

        const headers = {

            "Content-type":"application/json; charset=UTF-8"
        }
        
                
        axios.post("http://localhost:4000/accounts/register", values, headers)
        .then(y=> {
            console.log(y);
        })
       console.log(values)

        
     }}
    >
          

        <Form>

        <div className="container mt-4">
        <div className="form-group col-md-6">
            <label htmlFor="inputtitle4">title:</label>
            <Field type="text" className="form-control"   placeholder="title" name='title' />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputfirstname4">firstname:</label>
            <Field type="text" className="form-control" placeholder="firstname"  name='firstName' />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputlastname4">lastname:</label>
            <Field type="text" className="form-control"  placeholder="lastname" name='lastName' />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">email:</label>
            <Field type="email" className="form-control"  placeholder="email" name='email' />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputpassword4">password:</label>
            <Field type="text" className="form-control" placeholder="password"  name='password' />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputconfirmpassword4">confirm-password:</label>
            <Field type="text" className="form-control" placeholder="password"  name='confirmPassword' />
          </div>
          <div className="form-group ml-3">
            <div className="form-check">
              <Field className="form-check-input" type="checkbox" id="gridCheck" name='acceptTerms'/>
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary ml-3">Sign in</button>
        </div>

        </Form>

   </Formik>
   </div>
  )
}
