import axios from 'axios';
const key = 'e61d61238bf5efa24cb2963b7b46b5dc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


    export const getTrendingMovies = async() => {
        const response = await axios.get(`/trending/movie/day?api_key=${key}`);
        return response.data.results;
      
};
       export const getMovieDetails = async id => {
        const response = await axios.get(`/movie/${id}?api_key=${key}`);
        return response.data;
    };


    export const searchMovie = async query => {
        const response = await axios.get(`/search/movie?api_key=${key}&query=${query}`);
        return response.data.results;
    };


    export const getMovieCredits = async id => {
        const response = await axios.get(`/movie/${id}/credits?api_key=${key}`);
        return response.data.cast;
    };

    export const getMovieReviews = async id => {
        const response = await axios.get(`/movie/${id}/reviews?api_key=${key}`);
        return response.data.results;
    };