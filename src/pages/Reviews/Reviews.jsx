import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/api';
import Spinner from '../../components/Spinner/Spinner';
import { ReviewsMarkup } from 'components/AboutMovie/ReviewsMarkup/ReviewsMarkup';

export const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const id = useParams();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const onReviews = async () => {
            try {
                setLoading(true);
                setError('');
                const { awaitReviews } = await getMovieReviews(id);
                const onPainting = painting(awaitReviews)
                setReviews(onPainting);
                if (reviews.length === 0) {
                    return alert(`No reviews found`)
                }
            } catch (error) {
                setError(error.message);
            } finally {
                    setLoading(false)
                };
        }
        const painting = reviews => {
            return reviews.map(review =>({
                author: review.author,
                content: review.conntent,
                id: review.id,
            }))
        }
        onReviews();
    }, [id, reviews])

    return (
        <>
            {loading && <Spinner />}
            {reviews && reviews.length > 0 && !loading && !error && <ReviewsMarkup reviews={reviews} />};
        </>
    )
}

