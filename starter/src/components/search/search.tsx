import { useState } from "react";
import { IBook } from "../../core/models/book";
import { ISearch } from "../../core/models/search";
import { searchForBook } from "../book/bookService/bookService";
import Book from "../book/bookItem/book";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../core/store";
import { fetchAddBookShelf } from "../../core/store/thunkMiddleware/bookMiddleware";
import { useNavigate } from "react-router-dom";
var debounce = require('debounce');

function Search({ close, open, placeHolder, ...props }: ISearch) {

  const dispatch = useDispatch<AppDispatch>();
  const navigate  = useNavigate();
  const addBookToShelf=(shelf: string, book: any) =>{
    dispatch(fetchAddBookShelf({ newShelf: shelf, book }));
  }

  const [searchResults, setsearchResults] = useState([]);
  const resultBooks: any[] = searchResults?.length ? searchResults.map((book: any, index: number) => {
  let bookDescription: IBook = { book, shelfChangePicker: { display: true, changeAction: addBookToShelf } };
    return <li key={index.toLocaleString()}>
      <Book book={bookDescription.book} shelfChangePicker={bookDescription.shelfChangePicker} />
    </li>
  }) : [];
  return (
    <div className="search-books">
      <div className="search-books-bar">
        {close && (<a
          data-testid="backBtn"
          className="close-search"
          onClick={() => {close.action && close.action(false); navigate("/")}}
        >
          Close
        </a>
        )}
        <div className="search-books-input-wrapper">
          <input
            data-testid="searchInput"
            type="text"
            placeholder={placeHolder}
            onChange={event => debounce(searchForBook(event.target.value, setsearchResults), 1000)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {resultBooks}
        </ol>
      </div>
    </div>
  );
}

export default Search;