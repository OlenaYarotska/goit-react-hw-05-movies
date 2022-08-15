import { NavLink } from "react-router-dom";
import { List, Item, Poster, Title} from "./MoviesMarkup.styled";

export const MoviesMarkup = ({ movies }) => {
    return (
            <List>
            {movies.map(movie =>(
                <Item key={movie.id}>
                    <NavLink to={`/movies/${movie.id}`}>
                        <Poster src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt={movie.title} />
                        <Title>{movie.title}</Title>
                    </NavLink>
                </Item>
            ))}
        </List>
    )
};