import React, { useReducer, useState } from 'react'

export default function MyUseReducer() {

    const myState = [];

    const myReducer = (state, action) => {

        switch (action.type) {

            case "ADD":

                return [...state, action.payload];

            case "Delete":

                return state.filter((d, index) => {

                    return index !== action.payload;
                });


            case "Save":



                return state.map((d, myindex) => {

                    if (myindex === action.index) {
                        return action.payload;
                    }
                    else {
                        return d;
                    }

                });

            default:

                return state;
        }

    }

    const myChange = (e) => {

        setInput({ ...input, [e.target.name]: e.target.value });
        // setInput({ ...input, [e.target.name]: e.target.value });

    }

    const mySave = (e) => {

        if (index >= 0) {
            setData({ type: "Save", payload: input, index: index });
            setIndex(-1);


        }
        else {
            setData({ type: "ADD", payload: input });
        }
    }
    const [data, setData] = useReducer(myReducer, myState);
    const [input, setInput] = useState({});
    const [index, setIndex] = useState(-1);


    const myDelete = (index) => {

        setData({ type: "Delete", payload: index });
    }

    const edit = (myindex) => {


        setInput(data[myindex]);
        setIndex(myindex);
        console.log(input)
    }

    return (
        <div className='container my-3'>
            <div className='my-2'>


                <label htmlFor="">contact number</label>
                <input type="tel" name='item'

                    value={input.item}
                    onChange={myChange} />
            </div>
            <div className='my-2'>
                <label htmlFor="">fruits:</label>
                <select
                    name='dropdown'
                    onChange={myChange}
                    value={input.dropdown}
                >
                    <option value="" >-------select--------</option>
                    <option value="apples">Red Apples</option>
                    <option value="oranges">Outrageous Oranges</option>
                    <option value="tomatoes">Technically a Fruit Tomatoes</option>
                    <option value="bananas">Bodacious Bananas</option>
                </select>
            </div>
            <div className='my-2'>
                <input type="radio" id="html" name="fav_language" value="html" onChange={myChange} />
                <label for="html">HTML</label><br />
                <input type="radio" id="css" name="fav_language" value="css" onChange={myChange} />
                <label for="css">CSS</label><br />
                <input type="radio" id="javascript" name="fav_language" value="javascript" onChange={myChange} />
                <label for="javascript">JavaScript</label>
            </div>
            


            <button onClick={mySave}>Save</button>

            {
                data.map((element, index) => {

                    return (<div>{element.item}{" "}
                        {element.dropdown}{" "}
                        {element.fav_language}{" "}
                        {element.vehicle}
                        <button onClick={() => {
                            myDelete(index)
                        }}>Delete</button>

                        <button onClick={() => {
                            edit(index)
                        }}>Edit</button>
                    </div>)
                })

            }
        </div>
    )
}