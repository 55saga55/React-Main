import React, { useCallback, useEffect, useState } from "react";
// import Employee from './Employee';
// import MyDisplayInformation from './MyDisplayInformation';
import Ex1 from "./Ex1";
import Ex3 from "./Ex3";
export default function Ex2() {
  const [name, setName] = useState("");

  const [obj, setiobj] = useState({});

  const [data, setData] = useState([]);

  const manageData = () => {
    setData([...data, name]);
  };

  const mydelete = () => {
    //  return false;
  };
  return (
    <div>
      <Ex1 data={{ data }}></Ex1>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button onClick={manageData}>Save</button>

      <Ex3 text="This is the information This is the infromation This is the informnation This is the information" />
    </div>
  );
}
