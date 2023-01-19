// useMemo hook

import { useState, useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number); // calling SlowFunction which is the bottom side
  }, [number]); // dependency for: The function will be called only when the number changes

  const themeStyle = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} /> {/* Change number State: new number */}
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button> {/* Toggle theme state: true | false */}
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num: number) {
  console.log("Calling Slow Function");
  for (let i = 0; i < 1000000000; i++) { }; // very long loop for slow performance
  return num * 2;
}

export default App;