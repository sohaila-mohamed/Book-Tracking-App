import { useState } from "react";
import { IBook } from "../../models/book";
import { searchForBook } from "../../services/bookService";
import Book from "../book/book";
var debounce = require('debounce');

function Search(props:any){
  const [searchResults, setsearchResults] = useState([]);
  const resultBooks : any []= searchResults?.length ? searchResults.map((book:any,index:number)=>{
   return <li key={index.toLocaleString()}>
    <Book bookDescription={book} />
  </li>
  }): [];
    return (
      <div className="search-books">
      <div className="search-books-bar">
      {props.searchConfigs.close && ( <a
          className="close-search"
          onClick={() => props.searchConfigs.close.action(false)}
        >
          Close
        </a>
      ) }
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder={props.searchConfigs.placeHolder}
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