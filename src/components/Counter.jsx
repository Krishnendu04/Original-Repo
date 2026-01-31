import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
  const handleCount=()=>{
    setCount(prev=>prev+1);
  }
  return (
    <div>
      <p>Counter:{count}</p>
      <button onClick={handleCount}>Count</button>
    </div>
  )
}

export default Counter
