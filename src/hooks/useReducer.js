import React, {useReducer} from 'react';

// function reducer(state, action) {
//   console.log(action);
//   return {
//     counter: state.counter + 1,
//     clicks: state.clicks + 1,
//   };
// }

// const initialValue = {
//   counter: 0,
//   clicks: 0,
// };

// function reducer(state, action) {
//   console.log(action);
//   if(action.type === 'plus'){
//     return {
//       counter: state.counter + 1,
//       clicks: state.clicks + 1,
//     };
//   }

//   if(action.type === 'minus'){
//     return {
//       counter: state.counter - 1,
//       clicks: state.clicks - 1,
//     };
//   }

//   return state;
// }

function reducer(state, action) {
  switch(action.type){
    case 'plus':
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };

    case 'minus':
      return {
        counter: state.counter - 1,
        clicks: state.clicks - 1,
      };

    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
};

function App() {
  // Com os três parametros
  // const reducer = useReducer(
  //     function(state, action){},
  //     'Wellinton Camboim',
  //     function(initialValue){
  //         return {name: initialValue};
  //     },
  // );
  
  // console.log(reducer);
  
  // const reducer = useReducer(reducer, initialValue);

  const [state, dispatch] = useReducer(reducer, initialValue);

function handlePlus() {
  dispatch({ type: 'plus' });
}

function handleMinus() {
  dispatch({ type: 'minus' });
} 

return (
  <div>
    <h1>{state.counter}</h1>
    <h4>Cliques: {state.clicks}</h4>
    <button onClick={handlePlus}>+</button>
    <button onClick={handleMinus}>-</button>
  </div>
)

}

export default App;