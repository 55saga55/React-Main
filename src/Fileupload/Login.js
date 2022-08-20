import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const changeSet = (e) => {
        if (e.target.type === "text") {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    const mySaveData = (e) => {

        e.preventDefault();

        var formData = new FormData();

        formData.append("email", data.email);
        formData.append("password", data.password)

        axios("http://localhost:8002/api/auth/login", formData)
            .then(y => {
                console.log(y)
            })
    }

    return (
        <div className='container'>
            <form onSubmit={mySaveData}>
                <div className='form-group col-md-4' >
                    <label htmlFor="" className='my-2'>Email:</label>
                    <input type="text" name='email' onChange={changeSet} className='form-control' />
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Password</label>
                    <input type="text" name='password' onChange={changeSet} className='form-control' />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
