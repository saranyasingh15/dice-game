import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play</h2>
        <div className='text'>
            <p>Select any number . Click on dice image .</p>
            <p>I selected number is equal to dice number you will get same point as dice . </p>
            <p>If dice number turns out to be different than selected number then -2 points</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
background-color:#fbf1f1;
padding:20px;
margin-top:40px;
max-width:800px;
margin:0 auto;

`