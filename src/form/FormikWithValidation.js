import {Field, Form, Formik,ErrorMessage} from 'formik';
import React from 'react'


export default function FormikWithValidation() {


  const  validateEmployee = (data)=> {

        // console.log(data)

      const errors = {}
       
        if(!data.firstName )
        {
            errors.firstName = 'Please Enter your FirstName'
           
        }
      else if ( !(/([a-zA-Z]{3,30}\s*)+/ ).test(data.firstName)){
          errors.firstName = "please enter valid firstname "
        }
      
       if(!data.lastName)
        {
            
            errors.lastName = 'Please Enter your LastName'
        }
       else  if ( !(/([a-zA-Z]{3,30}\s*)+/ ).test(data.lastName)){
          errors.lastName = "please enter valid lastname "
        }
       if(!data.email)
        {
            
            errors.email= 'Please Enter your email'
        }
       else if ( !(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(data.email)){
          errors.email = "please enter valid email address "
        }
        if(data.checked.length === 0)
        {
            
            errors.checked= 'Please cheaked atleast one checkbox'
           
        }
        if (data.lang.length === 0){

          errors.lang = "Please select radio button"
         
        }
       return errors;
       


    }

    const submitHandle = (data)=> {

        console.log(data);
    }





  return (
    <div>

<Formik
            initialValues={{

                firstName : "",
                lastName : "",
                email : "",
                checked: [],
                lang: []

            }}

            validate= {
                validateEmployee }



                

            onSubmit={ (values) => {
                
                 console.log(values);

                 
              }}


            
        
        >
            <Form>

                <label>FirstName</label>
                <Field id="firstName" name="firstName"  type="text"></Field>
                <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />

                <label>lastName</label>
                <Field id="lastName" name="lastName"  type="text"></Field>

                <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />

                <label>email</label>
                <Field id="email" name="email"  type="email"></Field>

                
                <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />


           <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
            <ErrorMessage
                      name="checked"
                      component="div"
                      className="text-danger"
                      
                    />
          </div>


          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="radio" name="lang" value="English" />
              English
            </label>
            <label>
              <Field type="radio" name="lang" value="Gujrati" />
              Gujrati
            </label>
            <label>
              <Field type="radio" name="lang" value="Hindi" />
              Hindi
            </label>
            <ErrorMessage
                      name="lang"
                      component="div"
                      className="text-danger"
                    />
          </div>


               
                <button type="submit" >Submit</button>
            </Form>


        </Formik>

    </div>
  )
}