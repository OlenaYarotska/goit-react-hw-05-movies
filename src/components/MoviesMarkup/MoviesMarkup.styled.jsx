import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top:-20px;
`;

export const Item = styled.li`
flex-basis: calc(100% / 4 - 20px);
    margin-left: 20px;
    margin-top: 20px;
`;

export const Poster = styled.img`
    box-shadow: 5px 5px 15px 5px rgba(204, 88, 71, 0.2);
    transition: all .2s ease-in-out;
    margin-bottom: 13px;
    &:hover,
    &:focus {
    box-shadow: 5px 5px 10px 2px rgba(8, 8, 8, 0.5);
    transform: scale(1.05);
  }
`;

export const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: #110101;
    &:hover {
        color: #5c43b9;
    }
`;