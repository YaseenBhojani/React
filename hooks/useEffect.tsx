// useEffect Hook

import { useState, useEffect } from "react";

const App = () => {
  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`) // send request to json placeholder api
      .then(response => response.json())
      .then(json => setItems(json)); // change items state = json data
  }, [resourceType]); // dependency injection for re-render useEffect hook

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button> {/* for change resourceType: "posts"*/}
        <button onClick={() => setResourceType("users")}>Users</button> {/* for change resourceType: "users"*/}
        <button onClick={() => setResourceType("comments")}>Comments</button> {/* for change resourceType: "comments"*/}
      </div>
      <h1>{resourceType}</h1>

      {items.map((item, index) => <pre key={index}>{JSON.stringify(item)}</pre>)}
    </>
  );
};

export default App;