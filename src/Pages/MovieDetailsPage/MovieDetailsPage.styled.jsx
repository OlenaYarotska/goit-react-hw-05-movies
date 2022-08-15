import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const GoBackBtn = styled(NavLink)`
height: 45px;
color: #060607;
background-color: #5c43b9;
padding: 10px 25px;
border: none;
border-radius: 4px;
outline: none;
font-weight: 500;
font-size: 20px;
&:hover,
&:focus {
background-color: #3b2688;
color: #fff;
transition: opacity 250ms;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 3px 8px 24px 3px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 4px 9px 25px 4px rgba(0,0,0,0);
}

`;
export const Wrapper = styled.div`
    display: flex;
    border-bottom: 1px solid black;
`

export const Image = styled.img`
margin-top: 20px;
max-width: 320px;
height: 500px;
object-fit: cover;
margin-bottom: 20px;
border-radius: 5px;
`;

export const TextWrp = styled.div`
  margin-left: 30px;  
`;
export const MovieTitle = styled.h1`
  font-size: 30px; 
`;
export const TextTitle = styled.h2`
    font-size: 20px;
`
export const Text = styled.p`
font-size: 15px;
margin-bottom: 15px; 
`;

export const Nav = styled.ul`
display: flex;
align-items: center;
padding: 20px 40px;

`;

export const Link = styled(NavLink)`
    margin-right: 25px;
    font-size: 20px;
    font-weight: 700;
    color: #110f0f;
    &:hover,
    &:focus,
    &:active {
        color: #5c43b9;
    }
`