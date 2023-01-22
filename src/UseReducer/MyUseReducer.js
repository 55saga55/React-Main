import React, { useReducer, useState } from "react";

export default function MyUseReducer() {
  const myState = [];

  const myReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];

      case "Delete":
        return state.filter((data, index) => {
          return index !== action.payload;
        });

      case "Save":
        return state.map((data, myindex) => {
          if (myindex === action.index) {
            return action.payload;
          } else {
            return data;
          }
        });

      default:
        return state;
    }
  };

  const myChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // setInput({ ...input, [e.target.name]: e.target.value });
  };

  const mySave = (e) => {
    if (index >= 0) {
      setData({ type: "Save", payload: input, index: index });
      setIndex(-1);
    } else {
      setData({ type: "ADD", payload: input });
    }
  };
  const [data, setData] = useReducer(myReducer, myState);
  const [input, setInput] = useState([]);
  const [index, setIndex] = useState(-1);

  const myDelete = (index) => {
    setData({ type: "Delete", payload: index });
  };

  const edit = (myindex) => {
    setInput(data[myindex]);
    setIndex(myindex);
    console.log(input);
  };

  return (
    <div className="container my-3">
      <div className="my-2">
        <label htmlFor="">contact number</label>
        <input type="tel" name="item" value={input.item} onChange={myChange} />
      </div>
      <div className="my-2">
        <label htmlFor="">contact Name</label>
        <input
          type="tel"
          name="item1"
          value={input.item1}
          onChange={myChange}
        />
      </div>
      <div className="my-2">
        <label htmlFor="">fruits:</label>
        <select name="dropdown" onChange={myChange} value={input.dropdown}>
          <option value="">-------select--------</option>
          <option value="apples">Red Apples</option>
          <option value="oranges">Outrageous Oranges</option>
          <option value="tomatoes">Technically a Fruit Tomatoes</option>
          <option value="bananas">Bodacious Bananas</option>
        </select>
      </div>
      <div className="my-2">
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="html"
          onChange={myChange}
        />
        <label htmlFor="html">HTML</label>
        <br />
        <input
          type="radio"
          id="css"
          name="fav_language"
          value="css"
          onChange={myChange}
        />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="javascript"
          onChange={myChange}
        />
        <label htmlFor="javascript">JavaScript</label>
      </div>

      <button onClick={mySave}>Save</button>

      {data.map((element, index) => {
        return (
          <div>
            <table>
              <tr>
                <th>contact-no</th>
                <th>contact-name</th>
                <th>dropdown</th>
                <th>language</th>
                <th>delete</th>
                <th>update</th>
              </tr>
              <tr>
                <td> {element.item}</td>
                <td> {element.item1}</td>
                <td>{element.dropdown}</td>
                <td>{element.fav_language}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      myDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      edit(index);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}
