import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
  const handleIncrease=()=>{
    setCount(prev=>prev+1);
  }
  const handleDecrease=()=>{
    setCount(prev=>prev-1);
  }
  return (
    <div>
      <p>Counter:{count}</p>
      <button onClick={handleDecrease}>DecreaseCount</button>
      <button onClick={handleIncrease}>IncreaseCount</button>
    </div>
  )
}

export default Counter
