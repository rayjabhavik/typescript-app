import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState<number>(0);

 const increment = () => {
    setCount(count + 1)
  }

  function decrement(){
    setCount(count - 1)

  }

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={increment}>Inc</button>
    <button className="mx-2" onClick={decrement}>Dec</button>
  </div>
  )
}

export default Counter