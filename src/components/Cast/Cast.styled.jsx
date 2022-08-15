import styled from 'styled-components';

export const CastList = styled.ul`
display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top:-20px;
`;

export const CastItem = styled.li`
    flex-basis: calc(100% / 5 - 20px);
    margin-left: 20px;
    margin-top: 20px;
`;
export const Photo = styled.img`
height: 300px;
object-fit: cover;
`;

export const Name = styled.p`
font-size: 20px;
font-weight: 500;
`;

export const Descr = styled.p`
font-size: 18px;
`;
