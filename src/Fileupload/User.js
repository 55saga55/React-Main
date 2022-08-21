import axios from 'axios'
import React,{ useState}from 'react'

export default function User() {

    const [data, setdata] = useState({

        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        companyName: ""
      })
    
      const changSet = (e) => {
            setdata({ ...data, [e.target.name]: e.target.value });
    }
    const user=(e)=>{

        e.preventDefault();
        var token = JSON.parse(localStorage.getItem("data")).tokens.refreshToken;
        
        axios.patch("http://localhost:8002/api/user/update-details", data,{headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${token}`
        }}).then(y=>{
            console.log(y)
        })
    }
  return (
    <div className='container my-2'>
         <form onSubmit={user}>
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
                    <label htmlFor="" className='my-2'>Phone</label>
                    <input type="text" name='phone' onChange={changSet}  className='form-control'/>
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>Address:</label>
                    <input type="text" name='address' onChange={changSet}  className='form-control'/>

                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor="" className='my-2'>CompanyName:</label>
                    <input type="text" name='companyName' onChange={changSet}  className='form-control'/>
                </div>
                <div>
                    <button type='submit' onClick={user} className="my-4">Submit</button>
                </div>
                </form>
    </div>
  )
}
