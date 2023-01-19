import { useState } from "react";

// useToggle hook for toggle condition: true | false
const useToggle = (defaultValue: any) => {
  const [value, setValue] = useState<any>(defaultValue);

  const toggleValue = (value: any) => {
    setValue((currentValue: any) => typeof value === "boolean" ? value : !currentValue);
  };

  return [value, toggleValue];
};

// Example
const App = () => {
  const [value, toggleValue] = useToggle(1);

  return (
    <div>
      <h1>{value.toString()}</h1>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
};

export default App;