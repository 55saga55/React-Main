import axios from 'axios'
import React , {useState ,useEffect} from 'react'

export default function DisplayCategory() {

    const [rec, setRec] = useState()

    useEffect(() => {
      
        axios.get("http://localhost:8002/api/category").then(y=>{
            console.log(y.data.categories);
            setRec(y.data)
        })
      
    }, [])

   
  return (
    <div>
         {
        rec?.categories.map((element,index) => {

          return (
            <div key ={index}>
            <span>{element.image}</span>
            </div>
          )})}
          
    </div>
  )
}
