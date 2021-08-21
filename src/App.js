import './App.css'
import React from 'react'

function App() {
  const handleClick = () => {
    console.log("Hello, world!!!")

  }
  return (
    <div>
      <button onClick={handleClick}>
     牡丹
    </button>
    </div>
  )
}


export default App;
