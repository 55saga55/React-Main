import React, { useState } from "react";

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const add = {
    street: "Sardar-Chok",
    village: "Ode",
    city: "Anand",
    state: "Gujarat",
    country: "India",
  };

  const [value, setValue] = useState("user-address");

  return (
    <>
      <h2>{value}</h2>
      <button
        onClick={() =>
          setValue(
            add.street +
              "," +
              add.village +
              "," +
              add.city +
              "," +
              add.state +
              "," +
              add.country
          )
        }
      >
        Address
      </button>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>counter++</button>
        <button onClick={() => setCount(count - 1)} ond>
          counter--
        </button>
      </div>
    </>
  );
}
export default Counter;
