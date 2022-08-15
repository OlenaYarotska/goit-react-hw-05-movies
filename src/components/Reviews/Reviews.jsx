import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { getMovieReviews } from "services/theMovieApi";
import { Loader } from "components/Loader/Loader";
import { Item, Heading, Content, ErrText } from "./Reviews.styled";

export const Reviews = () => {
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true)
            try {
                const fetchedReviews  = await getMovieReviews(movieId);
                setReviews(fetchedReviews);
            } catch (error) {
                setError(error);
                toast.error('Something went wrong');
            } finally {
                setLoading(false)
            }
        }
        fetchReviews();
    }, [movieId]);

    return (
        <>
            {loading && <Loader />}
            {!error && reviews?.length > 0 &&(
                <ul>
                    {reviews.map(review => (
                        <Item key={review.id}>
                            <Heading>Author: {review.author}</Heading>
                            <Content>{review.content}</Content>
                        </Item>
                    ))}
                </ul>
            )}
            {!reviews || (reviews?.length === 0 &&<ErrText>There are no reviews for this movie.</ErrText>)}
        </>
    );
};