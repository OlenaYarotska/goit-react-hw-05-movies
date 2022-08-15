import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
font-size: 35px;
font-weight: 700;
text-transform: uppercase;
color: #474747;
&:hover,
&.active {
  color: #5c43b9;
  text-decoration: underline;
}
`;