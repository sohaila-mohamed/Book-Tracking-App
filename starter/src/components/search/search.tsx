

function Search(props:any){
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => props.searchChanege.setShowSearchpage(!props.searchChanege.showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
    );
}

export default Search;