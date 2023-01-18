import ChangePicker from "../book-shelf-changer/changePicker";
import { IChangeOption } from "../../core/models/changeOption"
import Thumbnail from "./thumbnail/thumbnail";
import AuthorList from "./authorList/authorList";
import { defaultChangePickerOptions } from "../../core/defines/bookDefines";
import { IBook } from "../../core/models/book";
function Book({book,shelfChangePicker,...prop}:IBook) {
    console.log("prop",prop)
    const shelfChangePickerOptions: IChangeOption[] = defaultChangePickerOptions;
    let authors:any = book.authors?.length ? <AuthorList authors={ book.authors}/>:<div><p>Not Found</p></div>
    let thumbnail: any = book.imageLinks?.thumbnail?  <Thumbnail img={book.imageLinks.thumbnail} /> : <div> <p> Not FOUND</p></div>;
    let changePicker: any = shelfChangePicker?.display? <ChangePicker options={shelfChangePicker.options?? shelfChangePickerOptions} /> : undefined;
    return (
        <div className="book">
            <div className="book-top">
                 {thumbnail}
                {changePicker}
            </div>
            <div className="book-title">{book.title}</div>
            {authors}
        </div>
    );

}
export default Book;