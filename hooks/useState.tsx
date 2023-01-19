// useState Hook
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0); // set initial count to 0

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // count value increase by 1
  };


  const decrementCount = () => {
    setCount(prevCount => prevCount - 1); // count value decrease by 1
  };

  return (
    <div>
      <h1>{count}</h1> {/* Count Value */}
      <button onClick={decrementCount}>Decrement Count</button> {/* for increase count value */}
      <button onClick={incrementCount}>Increment Count</button> {/* for decrease count value */}
    </div>
  );
};

export default App;