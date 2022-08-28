import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ProductGet() {
    // const [data,setData] =useState();

    function Getproduct() {

        axios.get("http://localhost:8002/api/product")
        .then(y=>{
            console.log(y.data.products)
        })
    }
        //  useEffect(()=>{
        //     Getproduct()
        //  },[])

  return (
    <div>
         <button type='button' onClick={Getproduct}>Log-product</button>
    </div>
  )
}
