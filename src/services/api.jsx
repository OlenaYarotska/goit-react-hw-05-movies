import axios from 'axios';

const KEY = 'e61d61238bf5efa24cb2963b7b46b5dc';
const BASE_URL = 'https://api.themoviedb.org/3/';
async function fetchMovies(url = '', config = {}) {
    const response = await axios.get(url, config);
    return response.data;

}
export function getTrendingMovies () {
    return fetchMovies(`${BASE_URL}/trending/movie/week?api_key=${KEY}`);
   
    };

// export async function getTrendingMovies () {
//     const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${KEY}`);
//     const movies = response.data.results;
//     return movies;
//     };

export  function getSearch (query)  {
    return fetchMovies(`${BASE_URL}/search/movie?&query=${query}&api_key=${KEY}`);

 
};
// export async function getSearch (search, page = 1)  {
//     const response = await axios.get(`${BASE_URL}/search/movie?&query=${search}&page=${page}&api_key=${KEY}`);
//     const movies = response.data.results;
//     return movies;
// };

export function getMovieInfo(id) {
    return fetchMovies(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
}
// export async function getMovieInfo (id) {
//     const response = await axios.get(`${BASE_URL}/movie/${id}&api_key=${KEY}`);
//     const movie = await response.data.results;
//     return movie;
// };
export function getMovieCredits (id) {
    return fetchMovies(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`);
};
// export async function getMovieCredits (id) {
//     const response = await axios.get(`${BASE_URL}/movie/${id}/credits&api_key=${KEY}`);
//     const credits = await response.data.cast;
//     return credits;
// };

export function getMovieReviews (id) {
    return fetchMovies(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`);
};
// export async function getMovieReviews (id) {
//     const response = await axios.get(`${BASE_URL}/movie/${id}/reviews&api_key=${KEY}`);
//     const reviews= response.data.results;
//     return reviews;
// };




