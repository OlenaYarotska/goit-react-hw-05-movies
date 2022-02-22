import { getTrendingMovies } from '../../services/api';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { HomepageHeading } from 'components/HomePageHeading/HomepageHeading';
import { MoviesMarkup } from 'components/MoviesMarkup/MoviesMarkup';


export function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError("");
                const { fetchedMovies } = await getTrendingMovies();
                const onPainting = painting(fetchedMovies);
                setMovies(onPainting);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        const painting = data => {
            return data.map(item => ({ id: item.id, title: item.title }))
        }
        fetchMovies();
    }, []);

    return (
    <>
        {loading && <Spinner />}     
        {movies && !loading && !error && (
        <>
            <HomepageHeading text={'Trending today'} />
            <MoviesMarkup movies={movies} />
        </>
        )}
    </>
    );
};
