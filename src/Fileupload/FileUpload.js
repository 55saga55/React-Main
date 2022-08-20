import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();
export default function EcommerceRegistration() {



    const [data, setData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        role: "",
        phone: "",
        address: "",
        companyName: "",
        image: ""

    })

    const changSet = (e) => {

        if (e.target.type === "file")
            setData({ ...data, [e.target.name]: e.target.files[0] });
        else
            setData({ ...data, [e.target.name]: e.target.value });
    }

    const mySaveData = (e) => {

        e.preventDefault();

        var formData = new FormData();

        formData.append("username", data.username);
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password)
        formData.append("passwordConfirmation", data.passwordConfirmation);
        formData.append("role", data.role);
        formData.append("phone", data.phone);
        formData.append("address", data.address)
        formData.append("companyName", data.companyName);
        formData.append("image", data.image);



        axios.post("http://localhost:8002/api/auth/register", formData,)
        
        
        
        .then(y => {

            console.log(y)
            toast.success(y.data.message)
            toast.success("successfully signin")
           
        }).catch(y => {

           toast.error(y.response.data.message);
        })
    }



    return (
        <div className='container my-3'>
            <ToastContainer />
          
            <form onSubmit={mySaveData}>
                <div className='form-group col-md-4 '>
                    <label htmlFor="" className='my-2'>UserName:</label>
                    <input type="text" name='username' className='form-control' onChange={changSet} />
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Name:</label>
                    <input type="text" name='name' onChange={changSet} className='form-control'/>
                </div>
                <div className='form-group col-md-4' >
                    <label htmlFor="" className='my-2'>Email:</label>
                    <input type="text" name='email' onChange={changSet}  className='form-control'/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Password</label>
                    <input type="text" name='password' onChange={changSet}  className='form-control'/>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>ConfirmPassword:</label>
                    <input type="text" name='passwordConfirmation' onChange={changSet}  className='form-control'/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>UserRole:</label>
                    <select name='role' onChange={changSet}  className='form-control'>
                        <option value="admin" >admin</option>
                        <option value="user">user</option>
                        <option value="seller">seller</option>
                    </select>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Phone-No:</label>
                    <input type="text" name='phone' onChange={changSet}   className='form-control'/>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Address:</label>
                    <input type="text" name='address' onChange={changSet}  className='form-control'/>

                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>CompanyName:</label>
                    <input type="text" name='companyName' onChange={changSet}  className='form-control'/>
                </div>

                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Upload-Image:</label>
                    <input type="file" name="image" onChange={changSet}  className='form-control'/>
                </div>

                <div>
                    <input type="submit"  onClick={mySaveData} value="save" className='btn btn-primary my-2 ' />
                </div>

            </form>

        </div>
    )
}