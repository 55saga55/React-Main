import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
// import DateView from "react-datepicker;"
// import { FormGroup} from "formik";

export default function YupForm() {

  let git =
    /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/igm;
  //  let  li = 
  // /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;


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
      , "only Business email is accepted").required(),

    age: Yup.number().min(18, "You must be at least 18 years").max(58, "You must be at least 58 years").required("Required*"),

    devProfile: Yup.string().matches(git, "This is not valid Github URL").required(),

    hobbies: Yup.array().min(2, "min 2 hobbies required").max(4, "max 4 hobbies you can select"),

    country: Yup.string().required("country must be selected"),
    dob: Yup.string().required()
  })
  const countryArr = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "canada", label: "Canada" },
    { value: "germany", label: "Germany" },
    { value: "uk", label: "UK" },
    { value: "france", label: "France" }
  ];

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
            country: "",
            dob: ""

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
              <label htmlFor="">GitProfile-Url:</label>
              <Field type="text" name="devProfile" placeholder="DevLink" />
              {errors.devProfile && touched.devProfile ? (
                <div>{errors.devProfile}</div>
              ) : null}
            </div>
            <div id="checkbox-group">Hobbies:</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="hobbies" value="traveling" />
                Traveling
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="singing" />
                singing
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="cooking" />
                cooking
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="reading" />
                reading
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="photography" />
                photography
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="music" />
                music
              </label>

              {errors.hobbies && touched.hobbies ? (
                <div>{errors.hobbies}</div>
              ) : null}
            </div>


            <div>
              <Field as="select" name="country" id="country">
                <option value="" label="">
                  Select Your Country{" "}
                </option>
                {countryArr.map((item, index) =>
                  <option key={index} value={item.value} label={item.label}>{item.value}</option>
                )}
              </Field>
              {errors.country && touched.country ? (
                <div>{errors.country}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="DOB">Date Of Birth:</label>
              <Field type="date" name="dob"  />

              {errors.dob && touched.dob ? (
                <div>{errors.dob}</div>
              ) : null}
            </div>
            
            {/* <label htmlFor="" >
            <DatePicker style={{ width: 180 }}
                                        // date={values.dueDate}
                                        mode="date"
                                        format="YYYY-MM-DD"
                                        // minDate={Date.now.toString()}
                                        maxDate="2050-06-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        showIcon={false} />

            </label> */}
           
          
         
       

            <button type='submit'>submit</button>
          </Form>
        )}
      </Formik>

    </div>
  )
}
