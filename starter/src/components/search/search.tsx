import { useState } from "react";
import { IBook } from "../../core/models/book";
import { ISearch } from "../../core/models/search";
import { searchForBook } from "../book/bookService/bookService";
import Book from "../book/book";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../core/store";
import { fetchAddBookShelf } from "../../core/store/thunkMiddleware/getAlBooks";
var debounce = require('debounce');

function Search({close,open,placeHolder,...props}:ISearch){
  const dispatch = useDispatch<AppDispatch>();
  function addBookToShelf(shelf:string,book:any){
     dispatch(fetchAddBookShelf({newShelf:shelf,book}));
  }
  const [searchResults, setsearchResults] = useState([]);
  const resultBooks : any []= searchResults?.length ? searchResults.map((book:any,index:number)=>{
  let bookDescription : IBook= {book,shelfChangePicker:{display:true,changeAction:addBookToShelf}};
   return <li key={index.toLocaleString()}>
    <Book book={bookDescription.book} shelfChangePicker={bookDescription.shelfChangePicker} />
  </li>
  }): [];
    return (
      <div className="search-books">
      <div className="search-books-bar">
      {close && ( <a
          className="close-search"
          onClick={() => close.action(false)}
        >
          Close
        </a>
      ) }
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder={placeHolder}
            onChange={event => debounce(searchForBook(event.target.value,setsearchResults),1000)}
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