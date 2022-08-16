// import "./App.css";
import { useEffect, useState } from "react";
// "https://upload.imagekit.io/api/v1/files/upload"
// import "./App.css";
// import { useEffect, useState } from "react";
// import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import axios from "axios";

function FileUpload() {
  return (
    <Formik
      initialValues={{
        profile: [],
      }}
      
      onSubmit={(values, props) => {
        let data = new FormData();
        // values.profile.forEach((photo, index) => {
        //   data.append(`photo$`, values.profile[index]);
        // });
        axios
          .post("https://upload.imagekit.io/api/v1/files/upload", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {(formik) => {
        return (
          <>
            <Form>
              <input
                id="file"
                name="profile"
                type="file"
                onChange={(event) => {
                  const files = event.target.files;
                  let myFiles =Array.from(files);
                  formik.setFieldValue("profile", myFiles);
                }}
                multiple
              />
              <ErrorMessage name="profile"/>
              <button type="submit">
                Submit
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
)}
export default FileUpload;
