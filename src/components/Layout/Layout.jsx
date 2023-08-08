import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Container, Nav, Link } from './Layout.styled.jsx'
import { Loader } from "components/Loader/Loader.jsx";


export const Layout = () => {
    return (
        <Container>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Toaster />
        </Container>
    )
};
