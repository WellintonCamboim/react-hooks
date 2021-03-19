import React, { useState } from 'react';


function Hooks() {
    const [counter, setCounter] = useState(0);

    function handlePlus() {
        setCounter((prevState) => prevState +1);
    }

    function handleMinus() {
        setCounter((prevState) => prevState -1);
    } 

  return <div>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
  </div>;
}

export default Hooks;