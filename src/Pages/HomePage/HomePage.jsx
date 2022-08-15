import { useEffect } from "react";
import { useState } from "react";
import { getTrendingMovies } from "services/theMovieApi";
import toast from 'react-hot-toast';
import { MoviesMarkup } from "components/MoviesMarkup/MoviesMarkup";
import { Loader } from "components/Loader/Loader";
import { PageHeading } from "./HomePage.styled";


export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            setLoading(true);
            try {
                const moviesGallery  = await getTrendingMovies();
                setMovies(moviesGallery);
            }
            catch (error) {
                setError(error);
                toast.error('Something went wrong!');
            } finally {
                setLoading(false);
            }
        }
        fetchTrendingMovies();
    }, []);

    return (
        <>
            <PageHeading>Trending today</PageHeading>
            {loading && <Loader />}
            {!error && !loading && movies && <MoviesMarkup movies={movies} />}
        </>
    )
};

