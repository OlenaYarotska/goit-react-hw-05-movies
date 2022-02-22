import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';
import { getSearch } from '../../services/api';
import Spinner from '../../components/Spinner/Spinner';
import { Container } from 'components/Container/Container';
import { Searchform } from 'components/Searchform/Searchform';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MoviesPage = () => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const searchQuery = searchParams.get('query');

  

    useEffect(() => {
        if (searchQuery && searchQuery !== '') {
            const onSearch = async () => {
                try {
                    setLoading(true);
                    setError('');
                    const { awaitMovies } = await getSearch(searchQuery);
                    const onPainting = painting(awaitMovies);
                    setMovies(onPainting);
                    // if (searchMovie.length === 0) {
                    //     return alert(`No movies found`)
                    // };
                } catch (error) {
                    setError (error.message);
                } finally {
                    setLoading(false)
                };
            };
            const painting = data => {
                return data.map(item => ({ id: item.id, title: item.title }));
            }
        
            onSearch();
        }
    }, [searchQuery]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setSearchParams({ query: evt.currentTarget.elements.query.value})
    };

    return (
        <Container>
            <Searchform onSubmit={handleSubmit} />

            {loading && <Spinner />}
        
            {movies && !loading && !error && <MoviesList movies={movies} />}
          </Container> 
    )
}
