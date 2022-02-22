export const ReviewsMarkup = ({ reviews }) => {
    return (
        <ul>
            {reviews.map(({ author, content, id }) => (
                <li key={id}>
                    <p><span>Author:</span>{author}</p>
                    <p>{content}</p>
                </li>
            ))}
        </ul> 
    )
};

