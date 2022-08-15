import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;
export const Input = styled.input`
    width: 300px;
    height: 60px;
    padding-left: 15px;
    border: 1px solid rgba(32, 33, 32, 0.2);
    border-radius: 5px 0 0 5px;
    font-size: 18px;
    &:focus {
        outline-color: #5c43b9;
    }
   &::placeholder {
    color: #646464;
    font-size: 18px;
    font-weight: 500;
 }
`;

export const Button = styled.button`
    border: none;
    border-radius: 0 5px 5px 0;
    outline: none;
    height: 63px;
    padding: 10px 20px;
    background-color:  #5c43b9;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    &:hover,
    &:focus {
        background-color: #3e288f;
        color: #fff;
        transition: opacity 250ms;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 3px 8px 24px 3px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 4px 9px 25px 4px rgba(0,0,0,0);
    }
`;