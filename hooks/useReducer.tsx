// useReducer hook

import { useReducer } from "react";

enum CountActionKind {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

type StateType = { count: number; }; // Reducer state type
type ActionType = { type: CountActionKind; }; // Reducer action type

// Counter Reducer Function
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case CountActionKind.INCREMENT: return { count: state.count + 1 };
    case CountActionKind.DECREMENT: return { count: state.count - 1 };
    default: return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // Initialize Counter Reducer

  const increment = () => dispatch({ type: CountActionKind.INCREMENT }); // dispatch action to increment
  const decrement = () => dispatch({ type: CountActionKind.DECREMENT }); // dispatch action to decrement

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default App;