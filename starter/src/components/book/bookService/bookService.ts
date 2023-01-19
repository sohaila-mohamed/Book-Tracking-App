import * as bookApi from '../../../core/services/apiService/BooksAPI'
import { mapBookToShelf } from "../../../core/utils/bookUtils/bookutils";
var _ = require('lodash');

export const getAllBooks = async ( oldState: any,action?: any,) => {
    return await  bookApi.getAll().then((res) => {
        let shelves = mapBookToShelf(res, _.cloneDeep(oldState));
        action && action(shelves);
        return {shelves,books:res};
    }).catch((error) => {
        console.log(action);
        action && action([])

    });
}

export const searchForBook = async (query: string, action?: any) => {
    if (query) {
        await bookApi.search(query, 12).then((res) => {
            action && action(res);
        }).catch((error) => { console.log(error); action && action([]) });
    }

    else action && action([]);

}

export const updateBookShelf = async ( oldStateBook: any,newShelf:string,action?: any,) => {
    return await  bookApi.update(oldStateBook,newShelf).then((res) => {
        action && action(res);
        return res;
    }).catch((error) => {
        console.log(action);
        action && action(oldStateBook);

    });
}
