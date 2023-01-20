import { createSlice } from "@reduxjs/toolkit";
import { IShelf } from "../models/shelf";
import { fetchAddBookShelf, fetchAllBooks, fetchUpdateBookShelf } from './thunkMiddleware/getAlBooks'
const initialShelves: IShelf[] = [
  {
    title: 'Currently Reading',
    bookList: [],
    id: "currentlyReading"
  },
  {
    title: 'Want to Read',
    bookList: [],
    id: "wantToRead"
  },
  {
    title: 'Read',
    bookList: [],
    id: "read"
  }
];
const initialbooks: any[] = [];

const shelvesSlice = createSlice({
  name: "shelves",
  initialState: {
    shelveList: initialShelves,
    books: initialbooks
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.fulfilled, (state: any, action: any) => {
      state.shelveList = action.payload.shelveList;
      state.books = action.payload.books;
    });
    builder.addCase(fetchUpdateBookShelf.fulfilled, (state: any, action: any) => {
      state.shelveList = action.payload.updatedShelevs;
    });
    builder.addCase(fetchAddBookShelf.fulfilled, (state: any, action: any) => {
      state.shelveList = action.payload.updatedShelevs;
      state.books = action.payload.updatedBooks;
    });
  },
});

export const shelvesActions = shelvesSlice.actions;
export default shelvesSlice;

