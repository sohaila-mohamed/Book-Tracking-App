import {  configureStore} from "@reduxjs/toolkit";
import shelvesSlice from "./booksSlice";

 const store = configureStore({
    reducer:{shelves:shelvesSlice.reducer}
})

export default store;
export type AppDispatch = typeof store.dispatch;