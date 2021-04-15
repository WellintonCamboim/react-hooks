import React, { useState, useMemo } from 'react';

function Hooks() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');

  //useMemo utilizado para memorizar valores(retornar valores), ou seja, ele não retorna a função, ele executa a função e retorna o seu resultado / useCallback utilizado para memorizar funcão e retornar função.
  const total = useMemo(() => {
    console.log('useMeno rodou!');
    return (counter * 123456 * 789 * 123456789);
  }, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{total}</h4>
      <button onClick={handlePlus}>+</button>

      <br /><br />
      <span>{name}</span><br />
      <input onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default Hooks;