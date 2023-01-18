import { IShelf } from "../models/shelf";

export function mapBookToShelf(books:any[],shelves:IShelf[]):IShelf[]{

    books.map((book)=>{
       let bookShelf= shelves.find((shelf)=>{
           return book.shelf.toLowerCase().replaceAll(' ','')===shelf.title.toLowerCase().replaceAll(' ','');
        });
        if(bookShelf) bookShelf.bookList.push(book);
        return;
    });
    return shelves;   
}