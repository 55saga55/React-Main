// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setlvalue] = useState("");

  const handelclick = (e) => {
    setlvalue(value.concat(e.target.name));
  };
  const clear = () => {
    setlvalue("");
  };
  const backspace = () => {
    setlvalue(value.slice(0, value.length - 1));
  };
  const calculate = () => {
    setlvalue(eval(value.toString()));
  };
  return (
    <div className="App">
      <form>
        <input
          type="text"
          style={{ width: "150px", height: "30px" }}
          s
          value={value}
        />
      </form>
      <div>
        <button
          name="0"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          0
        </button>
        <button
          name="1"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          1
        </button>
        <button
          name="2"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          2
        </button>
      </div>
      <div>
        <button
          name="3"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          3
        </button>
        <button
          name="4"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          4
        </button>
        <button
          name="5"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          5
        </button>
      </div>
      <div>
        <button
          name="6"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          6
        </button>
        <button
          name="7"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          7
        </button>
        <button
          name="8"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          8
        </button>
      </div>

      <div>
        <button
          name="9"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          9
        </button>
        <button
          name="+"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          +
        </button>
        <button
          name="-"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          -
        </button>
      </div>
      <div>
        <button
          name="*"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          *
        </button>
        <button
          name="/"
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          /
        </button>
        <button
          name="="
          style={{ padding: "15px", margin: "10px" }}
          onClick={calculate}
        >
          =
        </button>
      </div>
      <div>
        <button
          name="."
          style={{ padding: "15px", margin: "10px" }}
          onClick={handelclick}
        >
          .
        </button>
        <button
          id="clear"
          style={{ padding: "15px", margin: "10px" }}
          onClick={clear}
        >
          clear
        </button>
        <button
          id="cancle"
          style={{ padding: "15px", margin: "10px" }}
          onClick={backspace}
        >
          cancle
        </button>
      </div>
    </div>
  );
}

export default App;
