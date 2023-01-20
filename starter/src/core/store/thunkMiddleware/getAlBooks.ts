import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllBooks, updateBookShelf } from '../../../components/book/bookService/bookService'
import { IShelf } from "../../models/shelf"
import { addBookToShelf, mapBookIdstoShelves } from "../../utils/bookUtils/bookutils";

export const fetchAllBooks= createAsyncThunk(
  'books/ALL',
  async (oldState:IShelf[],thunkAPI) => {
    const response:any = await getAllBooks(oldState);
    return{shelveList: response.shelves,books: response.books}
  }
)

export const fetchUpdateBookShelf= createAsyncThunk(
  'books/update',
  async (updateDate:{oldStateBook:any,newShelf:string},thunkAPI) => {
    const currentShelves: {shelveList:IShelf[],books:any}= (thunkAPI.getState() as any).shelves;
    const response = await updateBookShelf(updateDate.oldStateBook,updateDate.newShelf);
    const newShelves= mapBookIdstoShelves(response,currentShelves);
    return{updatedShelevs: newShelves}
  }
)

export const fetchAddBookShelf= createAsyncThunk(
  'books/add',
  async (updateData:{newShelf:string,book:any},thunkAPI) => {
    const currentShelves: {shelveList:IShelf[],books:any}= (thunkAPI.getState() as any).shelves;
    await updateBookShelf(updateData.book,updateData.newShelf);
    const newShelves= addBookToShelf(currentShelves,updateData.newShelf,updateData.book);
    return{updatedShelevs: newShelves.shelveList,updatedBooks:newShelves.books};
  }
)

