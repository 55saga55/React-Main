import React, { useMemo, useState } from 'react'

export default function Ex3({text}) {


    const [showmore,setShowmore] = useState(false);


    const myClick = ()=> {

        setShowmore(!showmore);
    }

    const truncateText = useMemo(() => {
        console.log("this is the calculatingthis is the calculatingthis is the calculatingthis is the calculatingthis is the calculatingthis is the calculatingthis is the calculating");
      return text.slice(0, 30).concat('...');
    },[text]);



  return (
    <div>
        <p onClick={myClick}>
        {truncateText}
        {showmore ? 'less' : 'more'}
        </p>

    </div>
  )
}