import './App.css'
import React from 'react'
import { useAlert ,useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    console.log("Hello, world!!!")
    const alert = useAlert
  };
    
     const increment = () => {
       setCount(count + 1);
    };

     const decrement = () => {
      setCount(count - 1);
    };

     const reset = () => {
      setCount(0);
    };

    return(
    <div>
    <button onClick={handleClick}>牡丹</button>
    <button onClick={() => { alert("Hello, world!!!") }}>アラート</button>
    <button onClick={increment}>いいね</button>
    <button onClick={decrement}>よくないね</button>
    <button onClick={reset}>リセット</button>
    </div>
  )
};

export default App;
