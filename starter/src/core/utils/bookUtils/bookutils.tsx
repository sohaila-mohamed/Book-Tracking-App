import { IShelf } from "../../models/shelf";
var _ = require('lodash');
export function mapBookToShelf(books: any[], shelves: IShelf[]): IShelf[] {
    if (shelves?.length) {
        if (books?.length) {
            books.map((book) => {
                let bookShelf = shelves.find((shelf) => {
                    return book.shelf.toLowerCase().replaceAll(' ', '') === shelf.title.toLowerCase().replaceAll(' ', '');
                });
                if (bookShelf) bookShelf.bookList.push(book);
                return;
            });
            return shelves;

        }
        else {
            return shelves;
        }
    }
    else {
        return [];
    }

}
export function mapBookIdstoShelves(bookdIds: any, currentShelves: { shelveList: IShelf[], books: any[] }) {
    let updatedShelves: IShelf[] = [];
    currentShelves.shelveList.forEach((shelf) => {
        let newshelfbooks: any[] = bookdIds[shelf.id];
        let newbookList: any[]=[];
        currentShelves.books.forEach((book) => {
            if (newshelfbooks.includes(book.id)) {
                newbookList.push({ ..._.cloneDeep(book), shelf: shelf.id })
            }
        }
        );
        updatedShelves.push({ title: shelf.title, id: shelf.id, bookList: newbookList });
    });
    return updatedShelves;

}

export function addBookToShelf(currentShelves:{shelveList:IShelf[],books:any[]},shelfId:string,book:any ){
    let shelfIndex= currentShelves.shelveList.findIndex((shelf:IShelf)=>shelf.title.toLowerCase().replaceAll(" ",'')===shelfId.toLowerCase().replaceAll(" ",''));
    let newShelveList:IShelf[]=_.cloneDeep(currentShelves.shelveList);
    let newBooks :any []= _.cloneDeep(currentShelves.books);
    shelfIndex >-1 && newShelveList[shelfIndex]?.bookList.push({...book,shelf:shelfId});
    shelfIndex >-1 && newBooks.push({...book,shelf:shelfId});
    return {shelveList:newShelveList,books:newBooks};
}