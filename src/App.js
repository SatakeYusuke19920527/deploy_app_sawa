import './App.css'
import React, { useAlert, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("")
  const [message,setMessage]=useState("")
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
  const textoutput = () => {
    setText(text);
    setMessage(message);
  }
    
console.log(text)
  return (
    <div>
      <button onClick={handleClick}>牡丹</button>
      <button onClick={() => { alert("Hello, world!!!") }}>アラート</button>
      <button onClick={increment}>いいね</button>
      <button onClick={decrement}>よくないね</button>
      <button onClick={reset}>リセット</button>
      {count}
      <br/>
      {/* <input value={this.state.name} type="text" onChange={this.handleClick} />  */}
      <input
        type="text"
        onChange={e=>setText(e.target.value)}
      />
      <button onClick={textoutput}>
        牡丹
      </button>
      {message}
    
    </div>
  );
};

export default App;
