import { useState } from "react"
import "../App.css"


export const Counter = () =>{
   const [count,setCount] = useState(5)
  
    return(
        <div className="counter" > <h1 className={ count%2 === 0 ? "green" : "red"}>Counter:{count}</h1>
          <div>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
          </div>
          <button  onClick={()=>{setCount(count*2)}}>Double</button>
        </div>
        
    )
}
