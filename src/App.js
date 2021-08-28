import './App.css'
import React from 'react'
import { useAlert } from 'react'

function App() {
  const handleClick = () => {
    console.log("Hello, world!!!")
    const alert = useAlert
  }

  return (
    <div>
      <button onClick={handleClick}>
     牡丹
    </button>
       <button onClick={() => {alert("Hello, world!!!") }}>
      アラート
    </button>
    <button onClick={handleClick}>
     いいね
    </button>
    <button onClick={handleClick}>
        よくないね
    </button>
    <button onClick={handleClick}>
        リセット
    </button>
    </div>
  )
}

export default App;
