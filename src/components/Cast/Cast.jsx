import { useParams } from "react-router";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getMovieCredits } from "services/theMovieApi";
import { Loader } from "components/Loader/Loader";
import { CastList, CastItem, Photo, Name, Descr } from "./Cast.styled";

export const Cast = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const fetchCredits = async () => {
            setLoading(true);
            try {
                const credits = await getMovieCredits(movieId);
                setCredits(credits);
                
            } catch (error) {
                setError(error)
                toast.error('Something went wrong')
            } finally {
                setLoading(false);
            }
        }
        fetchCredits();
    }, [movieId]);

    return (
        <>
            {loading && <Loader />}
            {!error && credits && (
                <CastList>
                    {credits.map(credit => (
                        credit.profile_path && (
                            <CastItem key={credit.id}>
                                <Photo
                                    src={`https://image.tmdb.org/t/p/w300${credit.profile_path}`}
                                    alt={credit.name}
                                />
                                <Name>{credit.name}</Name>
                                <Descr>Character: {credit.character}</Descr>
                            </CastItem>
                        )))}
                </CastList>
            )}
        </>
    );
};

