import React, { useState } from "react";
import ReactSelect from "react-select";
export default function Mainform() {
  const [data, setData] = useState({
    signform: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      city: "",
      state: "",
      zipcode: "",
      mobile: "",
      address: "",
      country: "",
      hobbies: [],
      gender: null,
      acceptTerms: "",
    },
    signformErrors: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      city: null,
      state: null,
      zipcode: null,
      mobile: null,
      address: null,
      country: null,
      hobbies: null,
      gender: "",
      acceptTerms: "",
    },
  });

  const countryArr = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "canada", label: "Canada" },
    { value: "germany", label: "Germany" },
    { value: "srilanka", label: "SriLanka" },
  ];
  const hobbiesArr = [
    { value: "reading", label: "Reading" },
    { value: "singing", label: "Singing" },
    { value: "traveling", label: "Traveling" },
    { value: "cooking", label: "Cooking" },
    { value: "drawing", label: "Drawing" },
  ];

  const onHandleChanged = (e) => {
    const { name, value, checked } = e.target;
    const { signform, signformErrors } = data;
    let obj = {};

    if (name === "hobbies") {
      if (checked) {
        obj = { ...signform };
        obj[name].push(value);
      } else {
        obj = {
          ...signform,
          [name]: signform[name].filter((x) => x !== value),
        };
      }
    } else if (name === "acceptTerms") {
      setData((obj = { ...signform, [name]: checked }));
    } else {
      obj = {
        ...signform,
        [name]: value,
      };
    }

    if (!Object.keys(signformErrors).includes(name)) return;

    let objErr = {};

    if (name === "password" || name === "confirmPassword") {
      let ref =
        data.signform[name === "password" ? "confirmPassword" : "password"];
      const errMsg = validateField(name, value, ref);
      objErr = { ...signformErrors, [name]: errMsg };
    } else {
      const errMsg = validateField(
        name,
        name === "hobbies" ? data.signform["hobbies"] : value
      );
      objErr = { ...signformErrors, [name]: errMsg };
    }
    setData({ ...data, signform: obj, signformErrors: objErr });
  };

  var validateField = (name, value, ref) => {
    let errMsg = null;
    switch (name) {
      case "firstName":
        if (!value) errMsg = "please enter your firstName";
        else if (!/([a-zA-Z]{3,30}\s*)+/.test(value))
          errMsg = "please enter your valid FirstName";

        break;
      case "lastName":
        if (!value) errMsg = "please enter your lastName";
        else if (!/[a-zA-Z]{3,30}/.test(value))
          errMsg = "please enter your valid lastName";
        break;
      case "email":
        if (!value) errMsg = "please enter your email";
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
          errMsg = "please enter your valid email";
        break;
      case "password":
        // refValue is the value of Confirm Password field
        if (!value) errMsg = "Please enter Password.";
        else if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)
        )
          errMsg = "password must contain one digit,one special character";
        else if (ref && value !== ref)
          errMsg = "Password and Confirm Password does not match.";
        break;
      case "confirmPassword":
        // refValue is the value of Password field
        if (!value) errMsg = "Please enter Confirm Password.";
        else if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)
        )
          errMsg = "password must contain one digit,one special character";
        else if (ref && value !== ref)
          errMsg = "Password and Confirm Password does not match.";
        break;

      case "city":
        if (!value) errMsg = "please enter your city";
        else if (!/^[a-zA-Z',.\s-]{1,25}$/.test(value))
          errMsg = "plese enter your valid city name";
        break;
      case "state":
        if (!value) errMsg = "please enter your state";
        else if (!/[A-Z][a-z]+(?: +[A-Z][a-z]+)*/.test(value))
          errMsg = "first char in city should be  in capital";
        break;

      case "zipcode":
        if (!value) errMsg = " please enter your zipcode";
        else if (!/([0-9]{6}|[0-9]{3}\s[0-9]{3})/.test(value))
          errMsg = "enter your valid zipcode";
        break;
      case "mobile":
        if (!value) errMsg = "please enter your mobile Number";
        else if (!/^((0091)|(\+91)|0?)[789]{1}\d{9}$/.test(value))
          errMsg = " enter valid valid mobile Number";
        break;
      case "address":
        if (!value) errMsg = "plese enter your address0";
        else if (!/^[a-zA-Z0-9\s,.'-]{3,}$/gim.test(value))
          errMsg = "enter your valid full Address";
        break;
      case "country":
        if (!value) errMsg = "Please select Country.";
        break;
      case "hobbies":
        if (value.length === 0) errMsg = "Please select atleast one hobbie";
        break;
      case "gender":
        if (!value) errMsg = "Please select Gender.";
        break;
      case "acceptTerms":
        if (!value)
          errMsg = "Please select accept the our Terms and Conditiions";
        break;

      default:
        break;
    }
    return errMsg;
  };

  var validateForm = (signform, signformErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(signformErrors).map((x) => {
      let ref = null;
      if (x === "password" || x === "confirmPassword") {
        ref = signform[x === "password" ? "confirmPassword" : "password"];
      }
      const msg = validateFunc(x, signform[x], ref);
      if (msg) errorObj[x] = msg;
      else {
        console.log("hi");
      }
    });
    return errorObj;
  };

  const handlesubmit = () => {
    const { signform, signformErrors } = data;
    const errorObj = validateForm(signform, signformErrors, validateField);
    if (Object.keys(errorObj).length !== 0) {
      setData({ ...data, signformErrors: { ...signformErrors, ...errorObj } });
      return false;
    }
    console.log("Data ", signform);
  };

  return (
    <>
      <div className="container" key={data}>
        <h1 className="text-center">Sign-up Form</h1>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">FirstName:</label>
              <input
                onChange={onHandleChanged}
                type="text"
                className="form-control"
                placeholder="firstName"
                name="firstName"
                value={data.signform.firstName}
              />
              {data.signformErrors.firstName && (
                <span className="err">{data.signformErrors.firstName}</span>
              )}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="lastName">LastName:</label>
              <input
                onChange={onHandleChanged}
                type="text"
                className="form-control"
                placeholder="lastName"
                name="lastName"
                value={data.signform.lastName}
              />
              {data.signformErrors.lastName && (
                <span className="err">{data.signformErrors.lastName}</span>
              )}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="email">Email:</label>
              <input
                onChange={onHandleChanged}
                type="email"
                className="form-control"
                placeholder="email"
                name="email"
                value={data.signform.email}
              />
              {data.signformErrors.email && (
                <span className="err">{data.signformErrors.email}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password:</label>
              <input
                onChange={onHandleChanged}
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
                value={data.signform.password}
              />
              {data.signformErrors.password && (
                <span className="err">{data.signformErrors.password}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="confirmpassword">ConfirmPassword:</label>
              <input
                onChange={onHandleChanged}
                type="password"
                className="form-control"
                placeholder="confirmpassword"
                name="confirmPassword"
                value={data.signform.confirmPassword}
              />
              {data.signformErrors.confirmPassword && (
                <span className="err">
                  {data.signformErrors.confirmPassword}
                </span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="city">City:</label>
              <input
                onChange={onHandleChanged}
                type="text"
                className="form-control"
                name="city"
                placeholder="city"
                value={data.signform.city}
              />
              {data.signformErrors.city && (
                <span className="err">{data.signformErrors.city}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="state">State:</label>
              <input
                onChange={onHandleChanged}
                type="text"
                className="form-control"
                name="state"
                placeholder="state"
                value={data.signform.state}
              />
              {data.signformErrors.state && (
                <span className="err">{data.signformErrors.state}</span>
              )}
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="zipcode">ZipCode:</label>
              <input
                onChange={onHandleChanged}
                type="text"
                className="form-control"
                placeholder="zipcode"
                name="zipcode"
                value={data.signform.zipcode}
              />
              {data.signformErrors.zipcode && (
                <span className="err">{data.signformErrors.zipcode}</span>
              )}
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="mobile">Mobile:</label>
              <input
                onChange={onHandleChanged}
                type="text"
                className="form-control"
                placeholder="mobile"
                name="mobile"
                value={data.signform.mobile}
              />
              {data.signformErrors.mobile && (
                <span className="err">{data.signformErrors.mobile}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Address:</label>
              <input
                onChange={onHandleChanged}
                type="text"
                className="form-control"
                placeholder="1234 Main St"
                name="address"
                value={data.signform.address}
              />
              {data.signformErrors.address && (
                <span className="err">{data.signformErrors.address}</span>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="country">Country:</label>
              <ReactSelect
                name="country"
                options={countryArr}
                value={countryArr.find(
                  (x) => x.value === data.signform.country
                )}
                onChange={(e) =>
                  onHandleChanged({
                    target: {
                      name: "country",
                      value: e.value,
                    },
                  })
                }
              />
              {data.signformErrors.country && (
                <span className="err">{data.signformErrors.country}</span>
              )}
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="hobbies" className="mr-2">
                Hobbies:
              </label>
              <div className="form-check form-check-inline">
                {hobbiesArr.map((x, i) => {
                  return (
                    <>
                      <input
                        onChange={onHandleChanged}
                        className="form-check-input mx-2"
                        type="checkbox"
                        value={x.value}
                        name="hobbies"
                      />{" "}
                      <label
                        key={i}
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        {x.label}
                      </label>
                    </>
                  );
                })}
                {data.signformErrors.hobbies && (
                  <span className="err">{data.signformErrors.hobbies}</span>
                )}
              </div>
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="gender" className="mr-3">
                Gender:
              </label>
              <div className="form-check form-check-inline">
                <input
                  onChange={onHandleChanged}
                  className="form-check-input"
                  type="radio"
                  value="male"
                  name="gender"
                  checked={data.signform.gender === "male"}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  onChange={onHandleChanged}
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={data.signform.gender === "female"}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  onChange={onHandleChanged}
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="transgender"
                  checked={data.signform.gender === "transgender"}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  transgender
                </label>
              </div>
              {data.signformErrors.gender && (
                <span className="err">{data.signformErrors.gender}</span>
              )}
            </div>
            <div className="form-check ml-2 my-2">
              <input
                className="form-check-input"
                type="checkbox"
                name="acceptTerms"
                onChange={onHandleChanged}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Terms & Conditions
              </label>
              {data.signformErrors.acceptTerms && (
                <span className="err">{data.signformErrors.acceptTerms}</span>
              )}
            </div>
          </div>
          <div className="col-md-12 text-center my-3">
            <button
              type="button"
              onClick={handlesubmit}
              value="Submit"
              className="btn btn-primary mx-2"
            >
              Submit
            </button>
            <button type="button" className="btn btn-warning mx-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
