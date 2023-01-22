import React, { useEffect, useRef } from "react";
// import TestRefresh from './TestRefresh';
import TestRef from "./TestRef";

export default function UseRef1() {
  const myrefData = useRef(null);

  const mySubmit = (e) => {
    console.log(myrefData.current.value);
  };

  useEffect(() => {
    myrefData.current.value = "1";
  }, []);
  return (
    <div>
      <input type="text" ref={myrefData} />
      <button onClick={mySubmit}>Save</button>

      <TestRef />
    </div>
  );
}
