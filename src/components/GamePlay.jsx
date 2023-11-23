import React ,{useState}from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'


const GamePlay = () => {
    const [score,setScore]=useState(0)
    const [selectedNumber,setselectedNumber]=useState()
    const [currentDice,setcurrentDice] =useState(1)
    const [error,setError]=useState("")
    const [showRules,setshowRules]=useState(false)

    const resetScore=()=>{
        setScore(0)
        setselectedNumber(undefined)
    }

    const generateRandomNumber = (min,max)=>{
        return Math.floor(Math.random() * (max-min) + min);
    }

    const roll=()=>{
        if (!selectedNumber){
            setError("You have not selected any number")
            return;
        };
       setError("")
        const randomNumber=generateRandomNumber(1,7)
        setcurrentDice((prev)=>randomNumber)
       
        if(selectedNumber === randomNumber){
            setScore((prev)=>prev+randomNumber)
        }
        else{
            setScore((prev)=>prev-2)
        }
        setselectedNumber(undefined)
    }
  return (
    <MainContainer>
    <div className='top_section'>
    <TotalScore score={score} />
    <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} />
    </div>
    <RollDice currentDice={currentDice} roll={roll} />
    <div className='btns'>
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={()=>setshowRules(prev=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
    </div>
    {
     showRules && <Rules />
    }
    
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.main`
padding-top:50px;
.top_section{
    display:flex;
    justify-content:space-around;
    align-items:end;
}
.btns{
    gap:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
gap:10px;
    align-items:center;
}
`
const Button = styled.button`
background:#000000;
padding:10px 18px;
border-radius:5px;
color:white;
min-width:220px;
border:none;
font-size:16px;
transition: 0.3s background ease-in;
cursor:pointer;
&:hover {
    background-color:white;
    border:1px solid black;
    color:black;
    transition: 0.3s background ease-in;
}
`