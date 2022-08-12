import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

export default function YupForm() {

const singnUpSchema =Yup.object().shape({

    fullName : Yup.string().min(2,"To short fullName").max(40,"To long fullName").required("Required*"),
    address : Yup.string().min(2,"To short address").max(165,"To long address").required("Required*"),
    phoneNo: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
})


  return (
    <div >
        <Formik 
        initialValues={
            {
                fullName:"",
                address:"",
                phoneNo:"",
                email:"",
                age:"",
                gitProfile:"",
                hobbies:[],

            }
        }
        validationSchema={singnUpSchema}
        onSubmit ={(val)=>{
            console.log(val)
        }}
        >
              {({ errors, touched }) => (
          <Form>
            <div>
            <label htmlFor="">FullName:</label>
            <Field type="text" name="fullName"  placeholder="FullName"/>
            {errors.fullName && touched.fullName ? (
             <div>{errors.fullName}</div>
           ) : null}
            </div>
            
          <div>
          <label htmlFor="">Address:</label>
            <Field type="text" name="address" placeholder="Address"/>
            {errors.address && touched.address ? (
             <div>{errors.address}</div>
           ) : null}
          </div>
           <div>
           <label htmlFor="">Phone-No:</label>
            <Field type="text" name="phoneNo" placeholder="Phone-No"/>
            {errors.phoneNo && touched.phoneNo ? (
             <div>{errors.phoneNo}</div>
           ) : null}
           </div>
           <div>
           <label htmlFor="">Email:</label>
            <Field type="email" name="email" placeholder="Email"/>
           </div>
           <button type='submit'>submit</button>
          </Form>
           )}
        </Formik>

    </div>
  )
}
