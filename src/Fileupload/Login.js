import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const changeSet = (e) => {
       
            setData({ ...data, [e.target.name]: e.target.value });
       }

    const mySaveData = (e) => {

        e.preventDefault();

        // var formData2 = new FormData();

        // formData2.append("email", data.email);
        // formData2.append("password", data.password)
        // const obj = {

        // }



        axios.post("http://localhost:8002/api/auth/login", data,{
        
            // body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer` 
            }})
            .then(y => {
                console.log(y)
                localStorage.setItem("data", JSON.stringify(y.data));
            
            })
        console.log(data);
    }

    return (
        <div className='container'>
            <form onSubmit={mySaveData}>
                <div className='form-group col-md-4' >
                    <label htmlFor="" className='my-2'>Email:</label>
                    <input type="text"  name='email' onChange={changeSet} className='form-control' />
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Password</label>
                    <input type="text"  name='password' onChange={changeSet} className='form-control' />
                </div>
                <button type='submit' onClick={mySaveData} className='btn btn-primary my-4'>Login</button>
            </form>
        </div>
    )
}
