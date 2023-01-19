import ChangePicker from "../book-shelf-changer/changePicker";
import { IChangeOption } from "../../core/models/changeOption"
import Thumbnail from "./thumbnail/thumbnail";
import AuthorList from "./authorList/authorList";
import { defaultChangePickerOptions } from "../../core/defines/bookDefines";
import { IBook } from "../../core/models/book";
import { useDispatch } from "react-redux";
import store, { AppDispatch } from "../../core/store";
import { fetchUpdateBookShelf } from "../../core/store/thunkMiddleware/getAlBooks";
function Book({book,shelfChangePicker,...prop}:IBook) {

    const dispatch = useDispatch<AppDispatch>();

    function updateBookShelf(shelf:string){
        dispatch(fetchUpdateBookShelf({oldStateBook:book,newShelf:shelf}));
    }

    const shelfChangePickerOptions: IChangeOption[] = defaultChangePickerOptions;
    let authors:any = book.authors?.length ? <AuthorList authors={ book.authors}/>:<div><p>Not Found</p></div>
    let thumbnail: any = book.imageLinks?.thumbnail?  <Thumbnail img={book.imageLinks.thumbnail} /> : <div> <p> Not FOUND</p></div>;
    let changePicker: any = shelfChangePicker?.display? <ChangePicker value={book} options={shelfChangePicker.options?? shelfChangePickerOptions} changeAction={shelfChangePicker.changeAction ?? updateBookShelf} /> : undefined;
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