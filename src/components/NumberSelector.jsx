import React,{useState} from 'react'
import styled from 'styled-components'
const NumberSelector = ({selectedNumber , setselectedNumber,error,setError}) => {
   
    const arr=[1,2,3,4,5,6]
   // console.log(selectedNumber)
   const numberSelectorHandler=(value)=>{
    setselectedNumber(value)
    setError("")
   }
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
        {
            arr.map((value,i)=>(<Box isSelected={value === selectedNumber} onClick={()=>numberSelectorHandler(value)} key={i}>{value}</Box>))
        }
        </div>
        <p>Select Number</p>
       
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer= styled.div`
display:flex;
flex-direction:column;
align-items:end;
.flex{
    display:flex;
    gap:24px
}
.p{
    font-size:20px;
    font-weight:500px
}
.error{
    color:red;
}
`

const Box=styled.div`
height:70px;
width:70px;
border:1px solid black;
display:grid;
place-items:center;
font-weight:700;
font-size:24px;
background-color:${(props)=>(props.isSelected?"black":"white")};
color:${(props)=>props.isSelected?"white":"black"}
`