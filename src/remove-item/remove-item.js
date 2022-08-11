import React, { useState, useEffect } from 'react'
import Readmore from './Readmore';
export default function Remove_item() {

  const [data, setData] = useState([]);
  const [load,setReload]= useState(false);
// const [truncate,settruncate] = useState(false);


  useEffect(() => {

    fetch("https://course-api.com/react-tours-project")
      .then(y => y.json())
      .then(y => {
        setData(y);
      })
    

  }, [load]);

  // const resstr = truncate ? data.info.slice(0,50): 

  const  myRemove=(index)=> {
    var spi = data;
    spi.splice(index,1);
    setData([...spi]);
    }
  //   const remove = (id) => {
  //     setData(data.filter((x) => {
  //        if (x.id !== id) {
  //             return true;
  //         }
  //         else{
  //           return false;
  //         }
  //     }))
  // }
    const reloadAll = ()=> {
      setReload(!load);
    
 }

    
  return (
<>
    <div  className='d-flex row  justify-content-around' id="test" >
      {
        data.map((element,index) => {

          return (
          
              <>
              <div className="card col-6 my-3"  >
                  <img src={element.image} alt="" className="img-thumbnail"  />
                <div className="card-body">
                  <h5 className="card-title">Id: {element.id}</h5>
                  <h5 className="card-title">Name: {element.name}</h5>
               
                  <Readmore mydata = {element}/>
               
                  <button type="button" className="btn btn-outline-danger" onClick={()=>{myRemove(index)}}>Remove-Item</button>
                  <button type="button" className="btn btn-outline-warning mx-3" onClick={() =>reloadAll()}>Reload-Page</button>
                 
                </div> 
              </div>
            </>
            )
        })

      }

    </div>
 
</>
  )
}
