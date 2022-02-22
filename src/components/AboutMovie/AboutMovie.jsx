export const AboutMovie = ({ credits }) => {
    return (
        <ul>
            {credits.map(({ name, path, character, id }) => (
                <li key={id}>
                    <img src={path} alt="" height={150} />
                    <p>{name}</p>
                    <p><span>Character:</span>{character}</p>
                </li>
            ))}
        </ul>
    )
};
