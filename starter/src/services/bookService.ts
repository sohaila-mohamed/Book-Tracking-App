import * as bookApi from '../services/apiService/BooksAPI'
import { mapBookToShelf } from "../utils/bookutils";
var _ = require('lodash');

export const getAllBooks = (action: any, oldState: any) => {
    bookApi.getAll().then((res) => {
        let shelves = mapBookToShelf(res, _.cloneDeep(oldState));
        action(shelves);
    });
}

export const searchForBook = (query:string,action?:any)=>{
    if(query){
        bookApi.search(query,12).then((res)=>{
            action && action(res);
    });
    }
    else  action && action([]);

}
