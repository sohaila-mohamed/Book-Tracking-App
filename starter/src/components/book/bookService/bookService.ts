import * as bookApi from '../../../core/services/apiService/BooksAPI'
import { mapBookToShelf } from "../../../core/utils/bookUtils/bookutils";
var _ = require('lodash');

export const getAllBooks = async ( oldState: any,action?: any,) => {
    await bookApi.getAll().then((res) => {
        let shelves = mapBookToShelf(res, _.cloneDeep(oldState));
         action && action(shelves);
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
