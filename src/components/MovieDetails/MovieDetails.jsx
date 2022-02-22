
export const MovieDetails = ({ movie }) => {
    <div>

        <div>
            <img alt={movie.title}
                src={movie.poster_path}/>
        </div>
            <h2>{movie.title}</h2>
            <p>Rate {movie.vote_average}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
                
            <h3>Additional information:</h3>
    </div>
 
}
