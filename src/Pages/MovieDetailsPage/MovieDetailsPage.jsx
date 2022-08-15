import { useState } from "react"
import { useEffect } from "react"
import toast from "react-hot-toast";
import { Outlet, useLocation, useParams } from "react-router";
import { getMovieDetails } from "services/theMovieApi";
import { Loader } from "components/Loader/Loader";
import { GoBackBtn, Image, MovieTitle, Wrapper, TextWrp, Text, TextTitle, Nav, Link } from "./MovieDetailsPage.styled";

export const MovieDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            try {
                const fetchedDetails = await getMovieDetails(movieId);
                setMovie(fetchedDetails);
            } catch (error) {
                setError(error);
                toast.error('Something went wrong')
            } finally {
                setLoading(false);
            }
        }
        fetchMovieDetails();
    }, [movieId]);

    return (
        <>
             <GoBackBtn to={location?.state?.from ?? "/"}>Go Back</GoBackBtn>
            {loading && <Loader />}
            {!error && !loading && movie &&
                <>
                <Wrapper>
                   
                        <div>
                            <Image src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt={movie.title} />
                        </div>
                        <TextWrp>
                            <MovieTitle>{movie.title} ({movie.release_date.slice(0, 4)})</MovieTitle>
                            <Text>User score: {movie.vote_average * 10}%</Text>
                            <TextTitle>Overview</TextTitle>
                            <Text>{movie.overview}</Text>
                            <TextTitle>Genres</TextTitle>
                            <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
                        </TextWrp>
                    </Wrapper>

                    <div>
                        <h2>Additional information</h2>
                        <Nav>
                            <li>
                                <Link to='cast'>Cast</Link>
                            </li>
                            <li>
                                <Link to='reviews'>Reviews</Link>
                            </li>
                        </Nav>
                        <Outlet />
                    </div>
                </>
            }
        </>
    )
};