import axios from "axios";
import React, { useState } from "react";

export default function Category() {
  const [data, setData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const changSet = (e) => {
    if (e.target.type === "file")
      setData({ ...data, [e.target.name]: e.target.files[0] });
    else setData({ ...data, [e.target.name]: e.target.value });
  };

  const mySaveData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image);

    var token = JSON.parse(localStorage.getItem("data")).tokens.refreshToken;

    axios
      .post("http://localhost:8002/api/category", formData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((t) => {
        console.log(t);
      });
  };
  return (
    <div>
      <form onSubmit={mySaveData}>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            onChange={changSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Description:
          </label>
          <input
            type="text"
            name="description"
            onChange={changSet}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="" className="my-2">
            Upload-Image:
          </label>
          <input
            type="file"
            name="image"
            onChange={changSet}
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" onClick={mySaveData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
