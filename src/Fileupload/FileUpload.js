import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'

export default function EcommerceRegistration() {

    const [data,setData] = useState({
        username : "",
        name : "",
        email : "",
        password: "",
        passwordConfirmation : "",
        role : "",
        phone : "",
        address : "",
        companyName : "",
        image : ""

    })

    const changSet = (e)=> {

        if(e.target.type === "file")
        setData({...data, [e.target.name] : e.target.files[0]});
        else
        setData({...data, [e.target.name] : e.target.value});
    }

    const  mySaveData = (e)=>{

        e.preventDefault();
        var formData = new FormData();
        formData.append("username",data.username);
        formData.append("name",data.name);
        formData.append("email",data.email);
        formData.append("password",data.password) 
        formData.append("passwordConfirmation",data.passwordConfirmation);
        formData.append("role",data.role) ;
        formData.append("phone",data.phone);
        formData.append("address",data.address)
        formData.append("companyName",data.companyName);
        formData.append("image",data.image);

        

        axios.post("http://localhost:8002/api/auth/register",formData).then(y=> {
            
        console.log(y);
       
        // toast(y.data.mesaage)
        })
    }
    const notify = () => toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

  return (
    <div>
          <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />

      </div>

        <form  onSubmit={mySaveData}>

     <input type="text" name='username'  onChange={changSet}/>
     <input type="text" name='name' onChange={changSet} />
     <input type="text" name='email' onChange={changSet} />
     <input type="text" name='password' onChange={changSet}/>
     <input type="text" name='passwordConfirmation' onChange={changSet}/>
     <select name='role' onChange={changSet}>
            <option value="admin">admin</option>
            <option value="user">user</option>
            <option value="seller">seller</option>
     </select>
     <input type="text" name='phone' onChange={changSet}/>
     <input type="text" name='address' onChange={changSet}/>
     <input type="text" name='companyName' onChange={changSet}/>

    <input type="file" name="image" onChange={changSet}/>

    <input type="submit"  value="save"/>
        </form>

    </div>
  )
}