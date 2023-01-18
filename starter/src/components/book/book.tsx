import ChangePicker from "../book-shelf-changer/changePicker";
import { IChangeOption } from "../../models/changeOption"
import Thumbnail from "./thumbnail/thumbnail";
import AuthorList from "./authorList/authorList";
import { defaultChangePickerOptions } from "../../core/defines/bookDefines";
function Book(props: any) {
    const shelfChangePickerOptions: IChangeOption[] = defaultChangePickerOptions;
    let authors:any = props.bookDescription.book.authors?.length ? <AuthorList authors={ props.bookDescription.book.authors}/>:<div><p>Not Found</p></div>
    let thumbnail: any = props.bookDescription.book.imageLinks?.thumbnail?  <Thumbnail img={props.bookDescription.book.imageLinks.thumbnail} /> : <div> <p> Not FOUND</p></div>;
    let changePicker: any = props.bookDescription.shelfChangePicker?.display? <ChangePicker options={props.bookDescription.shelfChangePicker.options?? shelfChangePickerOptions} /> : undefined;
    return (
        <div className="book">
            <div className="book-top">
                 {thumbnail}
                {changePicker}
            </div>
            <div className="book-title">{props.bookDescription.book.title}</div>
            {authors}
        </div>
    );

}
export default Book;