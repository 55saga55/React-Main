import React, { useState } from "react";

const FormExe = () => {
  const [data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(setData({ [e.target.name]: e.target.value }));
  };
  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>FirstName</label>
          <input type="text" name="firstName" value={data.firstName}></input>
        </div>
        <div>
          <label>LastName</label>
          <input type="text" name="lastName" value={data.lastName}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={data.email}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={data.password}></input>
        </div>
        <div>
          <label>Confirm-Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
          ></input>
        </div>

        <div>
          <label>accept-terms</label>
          <input
            type="checkbox"
            name="acceptTerms"
            value={data.acceptTerms}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormExe;
