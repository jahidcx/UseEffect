import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './users';
import Persons from './persons';


function App() {
  
  function handleClick (){
    alert ('button clicked');
  }

  const handleClick2 = () => {
    alert('second button click');
  }

  const handleFive = (num) => {
    alert(num+5);
  }
  return (
    <>
     
     
      <h3> React core concept</h3>
      <Persons></Persons>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click second</button>
      <button onClick={()=>{ alert('third button click')
      }}>Click third</button>

      <button onClick={() => handleFive(4)} >Five</button>
      
      
    </>
  )
}

export default App
