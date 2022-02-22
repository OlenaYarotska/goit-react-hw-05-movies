import { NavLink, useLocation } from 'react-router-dom';

export const MoviesMarkup = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {/* {movies.map(({ title, id }) => (
                <li key={id}>
                    <NavLink to={`./movies${id}`} state={{ from: location }}>{title}</NavLink>
                </li>
            ))} */}
            {movies.map(movie => {
                return (
                    <li key={movie.id}>
                        <NavLink to={`./movies${movie.id}`} state={{ from: location }}>{movie.title}</NavLink>
                    </li>
                )
            })}
                            
        </ul>
    )
};
