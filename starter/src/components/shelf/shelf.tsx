import { IBook } from "../../models/book";
import Book from "../book/book";

function Shelf(props: any) {
  const books = props.config.bookList.map((book: IBook, index: number) => {
    return <li key={index.toLocaleString()}>
      <Book bookDescription={book} />
    </li>

  });
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.config.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Shelf;