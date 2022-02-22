import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Layout } from 'components/Layout/Layout';
import { HomePage }from 'pages/HomePage/HomePage';
import { MoviesPage} from 'pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { Cast }from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';


// const HomePage = lazy(() => import('./pages/HomePage')); 
// // .then(module =>({ default: module.HomePage, }))
// const MoviesPage = lazy(() => import('./pages/MoviesPage'));
// // .then(module => ({ default: module.MoviesPage, }))
// const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
// // .then(module => ({ default: module.MoviesDetailsPage, }))
// const Cast = lazy(() => import('./pages/Cast'));
// // .then(module => ({ default: module.Cast, }))
// const Reviews = lazy(() => import('./pages/Reviews'));
// // .then(module => ({ default: module.Reviews, }))


export const App = () => {
  return (
    <>
      <Layout />
        <Suspense fallback=""> 
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="movies/" element={<MoviesPage />} /> 
            <Route path="movies/:movieId" element={<MovieDetailsPage />}> 
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
       </Suspense>
    </>
  );
};



