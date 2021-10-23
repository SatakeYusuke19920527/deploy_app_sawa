import './App.css'
import React, { useAlert, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [myhand, setMyhand] = useState("")
  const [cpuhand, setCpuhand] = useState("")
  const [winlose, setWinlose] = useState("")

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
    if (text === "") {
      setMessage(text);
      setError("文字を入力してください。")
    } else {
      setMessage(text);
      setError("")
    }
  };

  const guu = () => {
    decideCpuHand()
    console.log("guu")
    setMyhand("ぐー");

  };
  
  const choki = () => {
    decideCpuHand()
    console.log("choki")
    setMyhand("ちょき");
  };
  
  const paa = () => {
    decideCpuHand()
    console.log("paa")
    setMyhand("ぱー");
  };

  const decideCpuHand = () => {
    const random = Math.floor(Math.random() * 3);
    console.log(random, 'random')
    if (random === 0) {
      setCpuhand("ぐー")
    } else if (random === 1) {
      setCpuhand("ちょき")
    } else if (random === 2) {
      setCpuhand("ぱー")
    } else {
      console.log('bug')
    }
  }

    const decideWinlose = () => {

  };

console.log(cpuhand,'cpuhand')
  
  return (
    <div>
      <button onClick={handleClick}>牡丹</button>
      <button onClick={() => { alert("Hello, world!!!") }}>アラート</button>
      <button onClick={increment}>いいね</button>
      <button onClick={decrement}>よくないね</button>
      <button onClick={reset}>リセット</button>
      {count}
      <br />
      <input
        type="text"
        onChange={e=>setText(e.target.value)}
      />
      <button onClick={textoutput}>
        牡丹
      </button>
        <div style={{color: "blue"}}>{error}</div>
      {message}
      
      <button onClick={guu}>ぐー</button>
      <button onClick={choki}>ちょき</button>
      <button onClick={paa}>ぱー</button>
      <p>あなたの手: {myhand}</p>
      <p>cpuの手: {cpuhand}</p>
    　<p>勝敗: {winlose}</p>
    </div>
  );
};

export default App;
