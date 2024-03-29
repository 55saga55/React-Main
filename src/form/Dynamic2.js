import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
// import AddMoreField from './AddMoreField'

import * as Yup from "yup";

export default function Dynamic2(errors, touched, index) {
  const [formValues, setFormValues] = useState(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required*"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required*"),
    email: Yup.string().email("Invalid email").required("Required*"),
    addField: Yup.array().of(Yup.string().required("Required*")),

    education: Yup.array(
      Yup.object({
        qualification: Yup.string().required("Required*"),
        grade: Yup.string().required("Required*"),
      })
    ).required(),
  });
  const priamaryValues = {
    firstName: "",
    lastName: "",
    email: "",
    // addMoreField2 : "",
    addField: [""],
    education: [
      {
        qualification: "",
        grade: "",
      },
    ],
  };
  const firstNameErrors = errors.firstName?.length || {};
  const firstNameTouched = touched.firstName?.length || {};
  return (
    <div className="container my-3">
      <Formik
        initialValues={priamaryValues || formValues}
        onSubmit={(values, submitProps) => {
          console.log("Form data", values);
          console.log("submitProps", submitProps);
          // submitProps.setSubmitting(false)
          // submitProps.resetForm()
        }}
        validationSchema={validationSchema}
      >
        {({ values, setValues, errors, touched }) => (
          //

          <Form className="needs-validation">
            <div>
              <label htmlFor="">FirstName:</label>
              <Field
                type="text"
                name="firstName"
                className={
                  "form-control" +
                  (firstNameErrors.name && firstNameTouched.name
                    ? " is-invalid"
                    : "")
                }
              ></Field>
              {errors.firstName && touched.firstName ? (
                <div className="text-danger">{errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="">LastName:</label>
              <Field type="text" name="lastName"></Field>
              {errors.lastName && touched.lastName ? (
                <div className="text-danger">{errors.lastName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="">Email:</label>
              <Field type="text" name="email"></Field>

              {errors.email && touched.email ? (
                <div className="text-danger">{errors.email}</div>
              ) : null}
            </div>
            {/* <AddMoreField /> */}

            <div className="">
              <label>perferLocation:</label>
              <FieldArray name="addField">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { addField } = values;
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)

                  return (
                    <div>
                      {addField.map((addField, index) => (
                        <div key={index}>
                          <div>
                            <Field name={`addField[${index}]`} />
                            {errors.addField && touched.addField ? (
                              <div className="text-danger">
                                {errors.addField}
                              </div>
                            ) : null}
                          </div>
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        Add
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div className="">
              <label>Education:</label>
              <FieldArray name="education">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { education } = values;
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {education.map((addField, index) => (
                        <div key={index}>
                          <label htmlFor="">Qualification</label>
                          {/* <Field name={`education[${index}].qualification`} /> */}

                          <Field
                            as="select"
                            name={`education.${index}.qualification`}
                          >
                            <option value="">--Select--</option>
                            <option value="M.E">M.E</option>
                            <option value="B.E">B.E</option>
                            <option value="B.C.A">B.C.A</option>
                            <option value="H.S.C">H.S.C</option>
                          </Field>
                          {/*                           {errors.education[index].qualification && touched.education ? (
                            <div className="text-danger">{errors.education[index].qualification}</div>
                          ) : null} */}
                          <ErrorMessage
                            name={`education.${index}.qualification`}
                            component="div"
                            className="text-danger"
                          />

                          <label htmlFor="">Grade</label>

                          <Field
                            name={`education.${index}.grade`}
                            type="text"
                          />
                          <ErrorMessage
                            name={`education.${index}.grade`}
                            component="div"
                            className="text-danger"
                          />
                          {/* {errors.education && touched.education ? (
                            <div className="text-danger">{errors.education[index].grade}</div>
                          ) : null} */}

                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        Add
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button type="submit" onClick={() => setFormValues()}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
