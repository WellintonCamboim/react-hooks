import React, { useState, useCallback } from 'react';

const fnCounter = new Set();

function Hooks() {
  const [counter, setCounter] = useState(0);


// useCallback, quando devo utilizar? => usar o useCallback apenas nestes casos de
// otimização de componentes filhos
  const handlePlus = useCallback(()=> {
    setCounter((prevState) => prevState + 1);

  }, []);

  // function handlePlus() {
  //   setCounter((prevState) => prevState + 1);
  // }

  fnCounter.add(handlePlus);
  console.log(fnCounter.size);

  return <div>
    <h1>{counter}</h1>
    {/* <button onClick={handlePlus}>+</button> */}
    
    {/* onClick={handlePlus} ==> função de Callback */}
    <Button onClick={handlePlus}/>

  </div>;
}

function Button(props) {
  return (
    <button onClick={props.onClick}>+</button>
  )
}

export default Hooks;