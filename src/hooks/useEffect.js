import React, { useState, useEffect } from 'react';

function Hooks() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=> {
        console.log('first render');

    },[]);

    useEffect(()=> {
        console.log('counter', counter);

    },[counter]);

    useEffect(()=> {
        console.log('name', name);

    },[name]);

    // useEffect(()=> {
    //     console.log('useEffect rodou!');

    //     return () => {
    //         console.log('vai desmontar...');
    //     };
    // },[]);

    // useEffect com async
    // useEffect(()=> {
    //     // IIFE --> Immediately Invoked Function Expression
    //     (async () => {
    //         await api.get;
    //     })();
    // },[]);

    // A ausência do [] faz com que o useEffect execute toda vez que o componente renderizar na tela.
    useEffect(()=> {
        console.log('useEffect rodou!');
    });

    // Executa uma única vez, quando o componente é montado em tela (semelhante ao componentDidMount)?
    useEffect(()=> {
        console.log('useEffect rodou!');
    },[]);

    // useEffect(()=> {
    //     console.log('useEffect rodou!', name);
    // },[name]);

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

      <br />
      <span>{name}</span>
      <br />
      <input onChange={e => setName(e.target.value)}></input>
  </div>;
}

export default Hooks;