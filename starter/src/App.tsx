import "./App.css";
import { Fragment, useEffect, useState } from "react";
import ShelvesList from "./components/shelf/shelvesList/shelvesList";
import Search from "./components/search/search";
import { ISearch } from "./core/models/search";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllBooks } from "./core/store/thunkMiddleware/getAlBooks";
import { AppDispatch } from "./core/store";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
   const shelvesList = useSelector((state:any)=>state.shelves.shelveList );
  const dispatch = useDispatch<AppDispatch>();
  function updateShelvesList(){
    dispatch(fetchAllBooks(shelvesList)).then((res:any)=>{
    })
  }
  useEffect(updateShelvesList,[]);
  const searchConfigs: ISearch = { close: { action: setShowSearchpage, value: showSearchPage }, placeHolder: "Search by title, author, or ISBN" }

  return (
    <div className="app">
      {showSearchPage ? (
        <Search close={searchConfigs.close} placeHolder={searchConfigs.placeHolder} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Fragment>
          { shelvesList &&  < ShelvesList shelves={shelvesList} />}
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
