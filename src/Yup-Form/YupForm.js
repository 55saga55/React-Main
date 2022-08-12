import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

export default function YupForm() {
 let git = 
 /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/igm ;
   let  li = 
  /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  
 
  const singnUpSchema = Yup.object().shape({

    fullName: Yup.string().min(2, "To short fullName").max(40, "To long fullName").required("Required*"),
    address: Yup.string().min(2, "To short address").max(165, "To long address").required("Required*"),
    phoneNo: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    // phoneNo : Yup.number().min(2,"min 6 number of phone no").max(12,"max 10 num of phoneno is valid"),
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/
      , "only Business email is accepted"),

    age: Yup.number().min(18, "You must be at least 18 years").max(58, "You must be at least 58 years").required("Required*"),

    devProfile: Yup.string().matches((li),"This is not valid Github URL")
  })


  return (

    <div >
      <Formik
        initialValues={
          {
            fullName: "",
            address: "",
            phoneNo: "",
            email: "",
            age: "",
            devProfile: "",
            hobbies: [],

          }
        }
        validationSchema={singnUpSchema}
        onSubmit={(val) => {
          console.log(val)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="">FullName:</label>
              <Field type="text" name="fullName" placeholder="FullName" />
              {errors.fullName && touched.fullName ? (
                <div>{errors.fullName}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="">Address:</label>
              <Field type="text" name="address" placeholder="Address" />
              {errors.address && touched.address ? (
                <div>{errors.address}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="">Phone-No:</label>
              <Field type="text" name="phoneNo" placeholder="Phone-No" />
              {errors.phoneNo && touched.phoneNo ? (
                <div>{errors.phoneNo}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="">Email:</label>
              <Field type="email" name="email" placeholder="Email" />
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="">Age:</label>
              <Field type="text" name="age" placeholder="age" />
              {errors.age && touched.age ? (
                <div>{errors.age}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="">Dev-Url:</label>
              <Field type="text" name="devProfile" placeholder="DevLink" />
              {errors.devProfile && touched.devProfile ? (
                <div>{errors.devProfile}</div>
              ) : null}
            </div>
            
            <button type='submit'>submit</button>
          </Form>
        )}
      </Formik>

    </div>
  )
}
