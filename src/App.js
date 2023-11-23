import styled from "styled-components"
import './App.css';
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

const Button =styled.button`
  background-color:black;
  color:white;
  padding:10px
`

function App() {
  const [isGameStarted,setisGameStarted]=useState(false)
  const toggleGamePlay=()=>{
    setisGameStarted(prev => !prev)
  }
  return (
    <div >
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />

      }
      
    </div>
  );
}

export default App;
