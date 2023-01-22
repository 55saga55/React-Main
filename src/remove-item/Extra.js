import React, { useState } from "react";

export default function Extra() {
  const [data, setData] = useState("This is chi and bana and org");
  const correct = () => {
    let fruits = {
      chi: "Cherry",
      bana: "Banana",
      org: "Orange",
    };
    setData(
      data
        .split(" ")
        .map((x) => {
          if (fruits.hasOwnProperty(x)) {
            return fruits[x];
          } else {
            return [x];
          }
        })
        .join(" ")
    );
  };
  return (
    <div className="container">
      <h1>string: {data}</h1>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          correct();
        }}
      >
        correct string
      </button>
    </div>
  );
}
