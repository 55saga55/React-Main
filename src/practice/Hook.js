import axios from "axios";
import React from "react";
import { useMemo } from "react";
import { useContext, createContext, useEffect, useState } from "react";

// const Hook = ()=>{

//    const [counter,setCounter] = useState(0);
//    const [data,setData] = useState([]);
//  const value =   useContext()

//    useEffect(()=>{
//     axios("https://jsonplaceholder.typicode.com/users")
//     .then(res=>setData(res))
//     // console.log()
//    },[])

//     return (<>
//       {/* <h1>{counter}</h1>
//     <button type="button"  onClick={()=>setCounter(counter+1)}>Increment</button>
//     <button type="button" onClick={()=>setCounter(counter-1)}>Decrement</button> */}
//     <div>
//         {/* {console.log(data)} */}
//         {data.data?.map((value)=>{
//             console.log(value.name)
//          return(
//             <>

//             {/* <div>{value}</div> */}
//             <h2>{value.name}</h2>
//             {/* <h2>{value.address.geo.lat}</h2> */}
//             </>
//          )

//         })
//         }
//     </div>
//     </>)
// }
// export default Hook;

// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee"
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222"
//     }
//   };

//   const ThemeContext = React.createContext(themes.light);

//   function Context() {
//     return (
//       <ThemeContext.Provider value={themes.dark}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }

//   function Toolbar(props) {
//     return (
//       <div>
//         <ThemedButton />
//       </div>
//     );
//   }

//   function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     return (
//       <button style={{ background: theme.background, color: theme.foreground }}>
//         I am styled by theme context!
//       </button>
//     );
//   }

//   export default Context;

// import React from 'react';

// export const UserContext = createContext();

// export default function Context() {
//   return (
//     <UserContext.Provider value={{name:"saga",city:"anand"}}>
//       <User />
//     </UserContext.Provider>
//   )
// }

// function User() {
//   const value = React.useContext(UserContext);

//   return <h1>{value.name}</h1>;
// }

// import { useState } from 'react';
export default function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(1);
  //   const factorial = factorialOf(number);

  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((inc) => inc + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
function factorialOf(n) {
  console.log("factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
