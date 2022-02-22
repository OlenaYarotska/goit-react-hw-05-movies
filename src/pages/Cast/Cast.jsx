import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/api';
import Spinner from '../../components/Spinner/Spinner';
import { AboutMovie } from 'components/AboutMovie/AboutMovie';

export const Cast = () => {
    const [credits, setCredits] = useState(null);
    const id = useParams();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const Credits = async () => {
            try {
                setLoading(true);
                setError('');
                const { awaitCredits } = await getMovieCredits(id);
                const onPainting = painting(awaitCredits)
                setCredits(onPainting);
            } catch (error) {
                setError(error.message);
            } finally {
                    setLoading(false)
                };
        }
        const painting = credit => {
            return credit.map(actor => ({
                name: actor.name,
                id: actor.id,
                character: actor.character,
                path: actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${actor.profile.path}`
                    : `Nothing found`,
            }))
        }
        Credits();
    }, [credits, id])

    return (
        <>
            {loading && <Spinner />}
            {credits && !loading && !error && <AboutMovie credits={credits} />};
        </>
    )
}
