import React, { useState } from "react";

export default function FormData() {
  // const hobies = ["re"]

  const [data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: "",
    hobbies: [],
  });

  const myData = (e) => {
    const { value, name, checked } = e.target;
    const { hobbies } = data;

    if (name === "hobbies") {
      if (checked) {
        // hobbies.push(value);

        setData({ ...data, hobbies: [...hobbies, value] });
      } else {
        setData({ ...data, hobbies: hobbies.filter((e) => e !== value) });
      }
    } else if (name === "acceptTerms") {
      setData({ ...data, [name]: checked });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const mySubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={mySubmit}>
        <div className="form-group col-md-6 my-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Title"
            name="title"
            onChange={myData}
          />
        </div>
        <div className="form-group col-md-6 my-3">
          <label>FirstName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="First-Name"
            name="firstName"
            onChange={myData}
          />
        </div>
        <div className="form-group col-md-6 my-3">
          <label>LastName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
            placeholder="Last-Name"
            name="lastName"
            onChange={myData}
          />
        </div>
        <div className="form-group col-md-6 my-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail4"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            onChange={myData}
          />
        </div>
        <div className="form-group col-md-6 my-3">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail5"
            aria-describedby="emailHelp"
            placeholder="Password"
            name="password"
            onChange={myData}
          />
        </div>
        <div className="form-group col-md-6 my-3">
          <label>Confirm-Password</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Confirm-Password"
            name="confirmPassword"
            onChange={myData}
          />
        </div>
        <div className="ml-3">
          <h6>Hobbies</h6>
          <div className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              value="cricket"
              id="defaultCheck1"
              name="hobbies"
              onChange={myData}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              cricket
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="reading"
              id="defaultCheck1"
              onChange={myData}
              name="hobbies"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              reading
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="cooking"
              id="defaultCheck1"
              onChange={myData}
              name="hobbies"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              cooking
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="traveling"
              id="defaultCheck1"
              onChange={myData}
              name="hobbies"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              traveling
            </label>
          </div>
        </div>
        <h6 className="my-3 ml-3">Accept our Terms & Condition</h6>
        <div className="form-check ml-3 ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
            name="acceptTerms"
            onClick={myData}
          />
          <label className="form-check-label">accept Terms</label>
        </div>

        <button
          type="submit"
          value="Save"
          className="ml-3 btn btn-primary my-3"
        >
          save
        </button>
      </form>
    </div>
  );
}
