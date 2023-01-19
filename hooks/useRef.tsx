// useRef hook
import { useState, useRef } from "react";

const App = () => {
  const [name, setName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null); // initialize input ref

  const focus = () => {
    inputRef.current!.focus(); // focus the input element
    console.log(inputRef.current!.value); // get the input value
  };

  return (
    <>
      <input type="text" ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default App;