import { IShelf } from "../../models/shelf";
import { mapBookToShelf } from "./bookutils";

describe ("map book to shelf function",()=>{
   describe ("given empty books and shelves",()=>{
    it("should return empty array",()=>{
        // preparation + action
       let shelvesWithBooks= mapBookToShelf([],[]);
       // assertion
       expect (shelvesWithBooks.length).toEqual(0);
    })

   });
   describe("given empty books with shelves",()=>{
    it("should return shelves with no books",()=>{
        //preparation 
        let shelvesConfig: IShelf[] = [
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
        // Action
        let shelvesWithBooks= mapBookToShelf([],shelvesConfig);
        //assertion
        expect (shelvesWithBooks.length).toEqual(3); 
        expect(shelvesWithBooks[0].bookList.length).toEqual(0);
        expect(shelvesWithBooks[1].bookList.length).toEqual(0);
        expect(shelvesWithBooks[2].bookList.length).toEqual(0);

    })
   });
   describe("given empty shelves with books",()=>{
    it("should give empty array",()=>{
        //preparation
        let books:any[]=[{
            title:"book1",
            authors:['author1','author2','author3'],
            thumbnail:"img1"
        },
        {
            title:"book2",
            authors:['author1','author2','author3'],
            thumbnail:"img2"
        }
        ];
       //action
       let shelvesWithBooks = mapBookToShelf(books,[]); 
       expect (shelvesWithBooks.length).toEqual(0); 
    })
   })

})

export default {};