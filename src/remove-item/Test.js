import React, { useEffect, useState } from "react";
import axios from "axios";
import Test2 from "./Test2";

export default function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((y) => {
      setData(y.data);
    });
  }, []);

  const mystyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div style={mystyle}>
      {data.map((element) => {
        return <Test2 myData={element}> </Test2>;
      })}
    </div>
  );
}
