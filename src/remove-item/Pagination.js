import React, { useState , useEffect } from 'react'

export default function Pagination() {

const [value,setValue]= useState({})
  
    useEffect(() => {
  
      fetch('https://jsonmock.hackerrank.com/api/articles?page=1')
      .then((response) => response.json())
      .then((x) => 
      { 
         
         
           setValue(value)
          console.log(x.data)
          
          
      }
      );
      
const dis = value.data;
console.log(dis);
  },[value])

    return (
      <div className="App">
        {
        //  value.data.map((x)=>{
        //      return(
        //       <h1>{x.title}</h1>
        //      )
        //   })
       value.data.find(obj => {
          return obj.created_at === 1455698317;
        })
        }
   
      </div>
    );
  
  
  
}
