export const Searchform = ({ onSubmit }) => {
    return (
        <form className="SearchForm" onSubmit={onSubmit}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                name="query"
                placeholder="Search movies"
                className="SearchForm-input"
            />
            <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
            </button>
        </form>
    )
}