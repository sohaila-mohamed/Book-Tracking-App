import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { IShelf } from "./models/shelf";
import ShelvesList from "./components/shelf/shelvesList/shelvesList";
import Search from "./components/search/search";
import { ISearch } from "./models/search";
import { getAllBooks } from './core/services/bookService'
function App() {
  let shelvesConfig: IShelf[] = [
    {
      title: 'Currently Reading',
      bookList: []
    },
    {
      title: 'Want to Read',
      bookList: []
    },
    {
      title: 'Read',
      bookList: []
    }
  ];
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [shelvesList, setShelvesList] = useState(shelvesConfig);
  useEffect(() => getAllBooks(setShelvesList, shelvesList), []);

  const searchConfigs: ISearch = { close: { action: setShowSearchpage, value: showSearchPage }, placeHolder: "Search by title, author, or ISBN" }

  return (
    <div className="app">
      {showSearchPage ? (
        <Search searchConfigs={searchConfigs} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Fragment>
            < ShelvesList shelves={shelvesList} />
          </Fragment>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
