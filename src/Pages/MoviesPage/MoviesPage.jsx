import { MoviesMarkup } from "components/MoviesMarkup/MoviesMarkup";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "services/theMovieApi";
import { Loader } from "components/Loader/Loader";
import { Form, Input, Button } from "./MoviesPage.styled";

export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) {
            return
        };

        const fetchMoviesBySearch = async () => {
            setLoading(true);
            try {
                const moviesResponse  = await searchMovie(query);
                if (moviesResponse.length === 0) {
                    return toast.error('No movies found')
                }
                setMovies(moviesResponse);
            }
            catch (error) {
                setError(error);
                toast.error('Something went wrong');
            } finally {
                setLoading(false);
            }
        }
        fetchMoviesBySearch();

    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (searchQuery.trim() === '') {
            return toast.error('Type your search request')
        }
        setSearchParams({ query: searchQuery });
        setSearchQuery('');
    };

    const handleChange = (e) => {
        const searchRequest = e.currentTarget.value.toLowerCase().trim();
        setSearchQuery(searchRequest);
    };
 
    return (
        <>
        <Form onSubmit={handleSubmit}>
                <Input
                    onChange={handleChange}
                    value={searchQuery}
                    type="text"
                    placeholder="search movies"
                >
                </Input>
            <Button type="submit">Search</Button>
        </Form>
            {loading && <Loader />}
            {!error && movies && <MoviesMarkup movies={movies} />}
        </>
    )  
};
