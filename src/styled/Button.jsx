import styled from "styled-components"

export const Button = styled.button`
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
