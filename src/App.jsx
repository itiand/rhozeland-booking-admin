import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">
        Click me
      </button>
    </>
  );
}

export default App;
