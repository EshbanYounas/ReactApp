import React from 'react'
import { useState } from 'react'
function Home({a}) {
// console.log("Data is", data);
const [counter, setCount] = useState(0)
let arr = [1,2,3,4,5]
console.log("counter",counter)
console.log("Set counter is",setCount)

  return (
    <>
        <h2>Counter App {a}</h2>
        <p> Counter is: {counter}</p>
   <button id="btn-increment" onClick={() => setCount(counter + 1)}>Increment</button>
    <button id="btn-decrement" onClick={() => setCount(counter - 1)} disabled={ counter <=0}>Decrement</button>
   <button id="btn-decrement" onClick={() => setCount(0)}>Restting</button>
 
    </>
    
  )
}

export default Home