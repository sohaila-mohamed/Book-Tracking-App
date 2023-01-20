
import { IBook } from "../../core/models/book";
import { IShelf } from "../../core/models/shelf";
import Book from "../book/bookItem/book";

function Shelf({title,bookList,...props}: IShelf) {
  const books = bookList.map((book: any, index: number) => {
    let bookDescription : IBook= {book,shelfChangePicker:{display:true}};
    return <li key={index.toLocaleString()}>
      <Book book={bookDescription.book} shelfChangePicker={bookDescription.shelfChangePicker}/>
    </li>

  });
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid" data-testid="bookList">
            {books}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Shelf;