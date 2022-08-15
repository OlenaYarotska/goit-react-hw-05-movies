import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';


const HomePage = lazy(() => import('../Pages/HomePage/HomePage').then(module => ({ default: module.HomePage })));
const MoviesPage = lazy(() => import('../Pages/MoviesPage/MoviesPage').then(module => ({ default: module.MoviesPage })));
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage/MovieDetailsPage').then(module => ({ default: module.MovieDetailsPage })));
const Cast = lazy(() => import('./Cast/Cast').then(module => ({ default: module.Cast })));
const Reviews = lazy(() => import('./Reviews/Reviews').then(module => ({ default: module.Reviews })));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound').then(module => ({ default: module.NotFound })));
export const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />} />
        <Route path='movies/:movieId' element={<MovieDetailsPage />}>
         <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
      </Routes>
  );
};
