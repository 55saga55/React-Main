import React, { useState } from "react";

export default function Test2(data) {
  const text = data.myData.description;
  const [value, setValue] = useState(true);
  const result = value ? text.slice(0, 200) : text;
  console.log(text.length);
  const display = () => {
    setValue(!setValue);
  };
  if (text.length > 200) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.myData.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{data.myData.title}</h5>
          <h2 className="card-title">{data.myData.price}</h2>
          <p className="card-text">{result}</p>
          <button onClick={display}>ReadMore</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.myData.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{data.myData.title}</h5>
          <h2 className="card-title">{data.myData.price}</h2>
          <p className="card-text">{result}</p>
        </div>
      </div>
    );
  }
}
