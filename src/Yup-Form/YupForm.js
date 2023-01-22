import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import DatePicker from "react-datepicker";
// import DateView from "react-datepicker;"
// import { FormGroup} from "formik";

export default function YupForm() {
  let git = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/gim;
  //  let  li =
  // /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  const singnUpSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "To short fullName")
      .max(40, "To long fullName")
      .required(),

    address: Yup.string()
      .min(2, "To short address")
      .max(165, "To long address")
      .required(),

    phoneNo: Yup.string()
      .required()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),

    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/,
        "only Business email is accepted"
      )
      .required(),

    age: Yup.number()
      .min(18, "You must be at least 18 years")
      .max(58, "You must be at least 58 years")
      .required(),

    devProfile: Yup.string()
      .matches(git, "This is not valid Github URL")
      .required(),

    hobbies: Yup.array()
      .min(2, "min 2 hobbies required")
      .max(4, "max 4 hobbies you can select"),

    country: Yup.string().required(),
    dateOfBirth: Yup.date()
      .min(new Date("01-01-1950"))
      .max(new Date())
      .required(),
    file: Yup.string().required().nullable(),
  });
  const countryArr = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "canada", label: "Canada" },
    { value: "germany", label: "Germany" },
    { value: "uk", label: "UK" },
    { value: "france", label: "France" },
  ];

  return (
    <div className="my-2">
      <h1 className="text-center">Sign-In Form</h1>
      <Formik
        initialValues={{
          fullName: "",
          address: "",
          phoneNo: "",
          email: "",
          age: "",
          devProfile: "",
          hobbies: [],
          country: "",
          dateOfBirth: "",
          file: null,
        }}
        validationSchema={singnUpSchema}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="container">
              <div className="form-group col-md-6">
                <label htmlFor="" className="col-form-label">
                  FullName:
                </label>
                <Field
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="FullName"
                />
                {errors.fullName && touched.fullName ? (
                  <div className="text-danger">{errors.fullName}</div>
                ) : null}
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="">Address:</label>
                <Field
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control"
                />
                {errors.address && touched.address ? (
                  <div className="text-danger">{errors.address}</div>
                ) : null}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Phone-No:</label>
                <Field
                  type="text"
                  name="phoneNo"
                  placeholder="Phone-No"
                  className="form-control"
                />
                {errors.phoneNo && touched.phoneNo ? (
                  <div className="text-danger">{errors.phoneNo}</div>
                ) : null}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Email:</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                {errors.email && touched.email ? (
                  <div className="text-danger">{errors.email}</div>
                ) : null}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Age:</label>
                <Field
                  type="text"
                  name="age"
                  placeholder="age"
                  className="form-control"
                />
                {errors.age && touched.age ? (
                  <div className="text-danger">{errors.age}</div>
                ) : null}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">GitProfile-Url:</label>
                <Field
                  type="text"
                  name="devProfile"
                  placeholder="DevLink"
                  className="form-control"
                />
                {errors.devProfile && touched.devProfile ? (
                  <div className="text-danger">{errors.devProfile}</div>
                ) : null}
              </div>
              <div id="checkbox-group" className="form-group col-md-6">
                Hobbies:
              </div>
              <div
                role="group"
                aria-labelledby="checkbox-group"
                className="form-group col-md-6"
              >
                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="traveling"
                    className="form-check-input"
                  />
                  Traveling
                </label>
                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="singing"
                    className="form-check-input"
                  />
                  singing
                </label>
                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="cooking"
                    className=" form-check-input"
                  />
                  cooking
                </label>
                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="reading"
                    className="form-check-input"
                  />
                  reading
                </label>
                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="photography"
                    className="form-check-input"
                  />
                  photography
                </label>
                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="music"
                    className="form-check-input"
                  />
                  music
                </label>
                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="learning"
                    className="form-check-input"
                  />
                  learning
                </label>
                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="writing"
                    className="form-check-input"
                  />
                  writing
                </label>

                <label className="mx-3">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="cp"
                    className="form-check-input"
                  />
                  computer programming
                </label>

                {errors.hobbies && touched.hobbies ? (
                  <div className="text-danger">{errors.hobbies}</div>
                ) : null}
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="">Country:</label>
                <Field
                  as="select"
                  name="country"
                  id="country"
                  className="form-control"
                >
                  <option value="" label="">
                    Select Your Country{" "}
                  </option>
                  {countryArr.map((item, index) => (
                    <option key={index} value={item.value} label={item.label}>
                      {item.value}
                    </option>
                  ))}
                </Field>
                {errors.country && touched.country ? (
                  <div className="text-danger">{errors.country}</div>
                ) : null}
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="dateOfBirth">Date Of Birth:</label>
                <Field
                  type="date"
                  name="dateOfBirth"
                  className="form-control"
                />

                {errors.dateOfBirth && touched.dateOfBirth ? (
                  <div className="text-danger">{errors.dateOfBirth}</div>
                ) : null}
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="">Choose file:</label>
                <Field type="file" name="file" className="form-control"></Field>
                {errors.file && touched.file ? (
                  <div className="text-danger">{errors.file}</div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-primary mx-3">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
