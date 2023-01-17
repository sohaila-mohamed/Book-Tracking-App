

function Search(props:any){
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => props.searchConfigs.close.action(false)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder={props.searchConfigs.placeHolder}
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