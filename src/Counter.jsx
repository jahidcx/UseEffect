import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState (0) // ekhane use State function 2ta jinis return korteche 
                                             // 1. kichu ekta 2. ekta function: setCount
     const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
     }

     const handleReduce = ()=> {
        const newCount = count - 1;
        setCount(newCount);
     }
                                             
    return (
        <div style={{border:'4px solid black'}}>
            <h2>Counter:{count}</h2>
            <button onClick={handleAdd}>count</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}