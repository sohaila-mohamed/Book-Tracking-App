import "./App.css";
import { Fragment, useEffect, useState } from "react";
import ShelvesList from "./components/shelf/shelvesList/shelvesList";
import Search from "./components/search/search";
import { ISearch } from "./core/models/search";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllBooks } from "./core/store/thunkMiddleware/bookMiddleware";
import { AppDispatch } from "./core/store";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./components/mainPage/main";
function App() {
  const shelvesList = useSelector((state: any) => state.shelves.shelveList);
  const dispatch = useDispatch<AppDispatch>();
  function updateShelvesList() {
    dispatch(fetchAllBooks(shelvesList)).then((res: any) => {
    })
  }
  useEffect(updateShelvesList, []);
  const searchConfigs: ISearch = { close: {value: true }, placeHolder: "Search by title, author, or ISBN" }
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main shelvesList={shelvesList}/>}></Route>
        <Route path="/search" element={<Search close={searchConfigs.close} placeHolder={searchConfigs.placeHolder} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
