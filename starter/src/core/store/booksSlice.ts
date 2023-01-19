import { createSlice } from "@reduxjs/toolkit";
import { IShelf } from "../models/shelf";
const initialShelves:IShelf[]= [
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
const shelvesSlice = createSlice({
  name: "shelves",
  initialState: {
    shelves:initialShelves
  },
  reducers: {
    addBook(state, action) {
     let shelfIndex= state.shelves.findIndex((shelf:IShelf)=>shelf.title===action.payload.book.shelf);
     shelfIndex && state.shelves[shelfIndex]?.bookList.push(action.payload.book);
    }
  },
});

export const shelvesActions = shelvesSlice.actions;

export default shelvesSlice;
