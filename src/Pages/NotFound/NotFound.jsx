import { NavLink } from "react-router-dom";
import cryingCat from '../../images/crying-cat.jpg';
import { Image, Text } from "./NotFound.styled";

export const NotFound = () => {
    return (
        <div>
            <Image src={cryingCat} width="500" alt="not found" />
        <Text>This page doesn't exist, go to {' '}
            <NavLink to="/">home page</NavLink>
            </Text>
        </div>
    );
};