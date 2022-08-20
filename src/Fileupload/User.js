import axios from 'axios'
import React from 'react'

export default function User() {
    
    const user=()=>{

        var token = JSON.parse(localStorage.getItem("data")).tokens.accessToken;
        
        axios("http://localhost:8002/api/user", {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${token}`
        }}).then(y=>{
            console.log(y)
        })
    }
  return (
    <div>
        <button type='submit' onClick={user}>Data</button>
    </div>
  )
}
