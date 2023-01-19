const useLocalStorage = () => {
  const setItem = (key: string, value: any) => { // for set item in localStorage
    if (!key || !value) return;
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key: string) => { // for get item in localStorage
    if (!key) return;
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
  };

  const removeItem = (key: string) => { // for remove item in localStorage
    if (!key) return;
    localStorage.removeItem(key);
  };

  const clearStorage = () => localStorage.clear(); // for clear localStorage

  return { setItem, getItem, removeItem, clearStorage };
};

const App = () => {
  const { setItem, getItem, removeItem, clearStorage } = useLocalStorage(); // initialize useLocalStorage hook

  const setHandler = () => setItem("12345", { name: "yaseen", age: 18 });
  const getHandler = () => console.log(getItem("12345"));
  const removeHandler = () => removeItem("12345");
  const clearStorageHandler = () => clearStorage();

  return (
    <div>
      <button onClick={setHandler}>Set Item</button>
      <button onClick={getHandler}>Get Item</button>
      <button onClick={removeHandler}>Remove Item</button>
      <button onClick={clearStorageHandler}>Clear Storage</button>
    </div>
  );
};

export default App;