import { useState, useEffect} from 'react';
import { useParams, NavLink, useLocation } from 'react-router-dom';
import { getMovieInfo } from '../../services/api';
import Spinner from '../../components/Spinner/Spinner';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Container } from 'components/Container/Container';

export const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const location = useLocation();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const movieDetails = async () => {
            try {
                setLoading(true);
                setError('');
                const movie = await getMovieInfo(id);
                const aboutMovie = painting(movie);
                setMovie(aboutMovie);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        const painting = movie => {
            const aboutMovie = {
                poster_path: movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.poster.path}`
                    : `Nothing found`,
                title: movie.title,
                id: movie.id,
                overview: movie.overview,
            };
            return aboutMovie;
        }

        movieDetails();
    }, [id]);

    return(
        <>
        <Container>
            <button type="button" to={location?.state?.from ?? '/'}>
                Go back
                </button>
                {loading && <Spinner />}
                {movie && !error && !loading && <MovieDetails movie={movie} />}
                <ul>
                    <li>
                        <NavLink state={{ from: location?.state?.from }} to={'cast'}>
                            Cast
                        </NavLink>
                    </li>
                    <li>
                        <NavLink state={{ from: location?.state?.from }} to={'reviews'}>
                            Reviews
                        </NavLink>
                    </li>
                        </ul>
            </Container>
        </>
    )
};

