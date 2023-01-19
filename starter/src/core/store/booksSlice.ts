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
  reducers: {
    addBook(state, action) {
      let shelfIndex = state.shelveList.findIndex((shelf: IShelf) => shelf.title.toLowerCase().replaceAll(" ", '') === action.payload.shelf.toLowerCase().replaceAll(" ", ''));
      shelfIndex > -1 && state.shelveList[shelfIndex]?.bookList.push({ ...action.payload.book, shelf: action.payload });
      shelfIndex > -1 && state.books.push({ ...action.payload.book, shelf: action.payload });
    },
    removeBook(state, action) {
      let filteredShelfBooks: any[] = [];
      let shelfIndex = state.shelveList.findIndex((shelf: IShelf) => shelf.title.toLowerCase().replaceAll(" ", '') === action.payload.book.shelf.toLowerCase().replaceAll(" ", ''));
      if (shelfIndex > -1) {
        filteredShelfBooks = state.shelveList[shelfIndex]?.bookList.filter((book) => { console.log(book); return book.id !== action.payload.book.id });
        if (filteredShelfBooks) state.shelveList[shelfIndex].bookList = filteredShelfBooks;
      }

    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.fulfilled, (state: any, action: any) => {
      console.log("payload", action.payload);
      state.shelveList = action.payload.shelveList;
      state.books = action.payload.books;
    });
    builder.addCase(fetchUpdateBookShelf.fulfilled, (state: any, action: any) => {
      console.log("extra update", action.payload);
      state.shelveList = action.payload.updatedShelevs;
    });
    builder.addCase(fetchAddBookShelf.fulfilled, (state: any, action: any) => {
      console.log("payload to add", action.payload);
      state.shelveList = action.payload.updatedShelevs;
      state.books = action.payload.updatedBooks;
    });
  },
});

export const shelvesActions = shelvesSlice.actions;
export default shelvesSlice;

