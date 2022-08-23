import React from 'react'

 function Ex1(data) {

    console.log(data);
  return (
    <div>Employee</div>
  )
}

//HOC conecpt
export default React.memo(Ex1
    ,(prev,current)=> {

//    console.log("pre "+ JSON.stringify(prev).length);
//    console.log("current "+ JSON.stringify(current).length);

    if(prev.data.length === current.data.length)
    {
        return true;
    }

});