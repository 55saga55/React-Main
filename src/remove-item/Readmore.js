import React, { useState  } from 'react'

export default function Readmore(data) {
     const text = data.mydata.info;
    //  console.log(text);
     const [truncate,settruncate] = useState(true);
    const res = truncate ? text.slice(0,100): text; 
    const  toggle = ()=>{
      settruncate(!truncate)
    }
  return (
    <>
    <div>
      
       {
           <div className="card-body">
           <p className="card-text">{res}</p>
           <button type="button"  onClick={toggle} className="btn btn-outline-primary">Read-more</button> 
           </div>
       }
    </div>
    </>
  )
}
