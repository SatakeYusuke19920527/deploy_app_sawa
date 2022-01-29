import './App.css'
import React, { useAlert, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [myhand, setMyhand] = useState("")
  const [cpuhand, setCpuhand] = useState("")
  const [winlose, setWinlose] = useState("")
  const [number, setNumber] = useState(0);
  const [quiita, setQuiita] = useState("")

  useEffect(() => { 
      fetchQiitaData()
  }, [])

  const fetchQiitaData = async () => {
    const res = await axios.get('https://qiita.com/api/v2/items')
    setQuiita(res.data)
  }

  useEffect(() => {
    console.log('in useEffect myhand', myhand)
    console.log('in useEffect cpuhand', cpuhand)
    decideWinLose(myhand, cpuhand)
  }, [number]);

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
    decideWinLose()
    console.log("guu")
    setMyhand("ぐー");
    setNumber(prev => prev + 1)
  };
  
  const choki = () => {
    decideCpuHand()
    decideWinLose()
    console.log("choki")
    setMyhand("ちょき");
    setNumber(prev => prev + 1)
  };
  
  const paa = () => {
    decideCpuHand()
    decideWinLose()
    console.log("paa")
    setMyhand("ぱー");
    setNumber(prev => prev + 1)
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

  const decideWinLose = (myhand, cpuhand) => {
      if (myhand === "" && cpuhand === "") {
      }else if (myhand === cpuhand) {
        setWinlose("~引き分け~")
      }else　if (cpuhand === "ちょき" && myhand === "ぐー") { 
　　　   setWinlose("~勝ち!!~")
      } else if (cpuhand === "ぐー" && myhand === "ぱー") {
        setWinlose("~勝ち!!~")
      } else if (cpuhand === "ぱー" && myhand === "ちょき") {
        setWinlose("~勝ち!!~")
      } else {
        setWinlose("~負け...~")
      }
};
  
  console.log(quiita, 'quiita chck')
  console.log(quiita.length, 'quiita chck')
  
  return (
    <>
      <button onClick={handleClick}>牡丹</button>
      <button onClick={() => { alert("Hello, world!!!") }}>アラート</button>
      <br/>
      <h3>いいねよくないねボタン </h3>
      <button onClick={increment}>いいね</button>
      <button onClick={decrement}>よくないね</button>
      <button onClick={reset}>リセット</button>
      {count}
      <br/>
      <input type="text"
        onChange={e=>setText(e.target.value)}/>
      <button onClick={textoutput}>
        牡丹
      </button>
      <div style={{ color: "blue" }}>{error}</div>
      {message}
      <h3>じゃんけん</h3>
      <button onClick={guu}>ぐー</button>
      <button onClick={choki}>ちょき</button>
      <button onClick={paa}>ぱー</button>
      <p>あなたの手: {myhand}</p>
      <p>cpuの手: {cpuhand}</p>
      <p>優勝劣敗: {winlose}</p>

    {quiita && quiita.map((q, index) => {
          return (
            <div key={index}>
             <Link to={q.title}>{q.title}</Link>
            </div>
          )
        })
      }

        {/* {quiita && quiita.map((q, index) => {
          return (
            <div key={index}>
              <h3>{q.title}</h3>
            </div>
          )
        })
      } */}

      <Link to={"/page2"}>~２ページ目へ~</Link>
    </>
  );
};
export default App;