import React,{useState} from 'react'
import styled from 'styled-components'
const RollDice = ({currentDice,roll}) => {

  return (
    <DiceContainer>
    <div className='dice' onClick={roll}>
        <img src={`/images/dice_${currentDice}.png`} />
    </div>
    <p>Click the Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer=styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;

.dice{
    cursor:pointer;
}

p{
    font-size:24px
}
`;