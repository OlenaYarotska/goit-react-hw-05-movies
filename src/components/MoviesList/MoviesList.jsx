import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ title, id }) => (
                <li key={id}>
                    <NavLink to={`/movies/${id}`} state={{ from: location }}>
                        {title}</NavLink>
                </li>
            ))}
        </ul>
    )
};



