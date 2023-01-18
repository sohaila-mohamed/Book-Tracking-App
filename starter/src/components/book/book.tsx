import ChangePicker from "../book-shelf-changer/changePicker";
import { IChangeOption } from "../../models/changeOption"
//ToDO move change picker configs to shelf component to customize book options   
function Book(props: any) {
    const shelfChangePickerOptions: IChangeOption[] = [
        {
            value: "none",
            disabled: true,
            label: " Move to..."
        },
        {
            value: "currentlyReading",
            disabled: false,
            label: "Currently Reading"
        },
        {
            value: "wantToRead",
            disabled: false,
            label: "Want to Read"
        },
        {
            value: "read",
            disabled: false,
            label: "Read"
        },
        {
            value: "None",
            disabled: false,
            label: "None"
        }

    ];
    let authors: any[] = props.bookDescription.authors?.length ? props.bookDescription.authors.map((author: string,index:number) => {
        return <div className="book-authors" key={index.toLocaleString()}>{author}</div>
    }) : [];

    let thumbnail: any = props.bookDescription.imageLinks?.thumbnail && <div
        className="book-cover"
        style={{
            width: 128,
            height: 192,
            backgroundImage:
                `url(${props.bookDescription.imageLinks.thumbnail})`,
        }}
    ></div>

    return (
        <div className="book">
            <div className="book-top">
                 {thumbnail}
                <ChangePicker options={shelfChangePickerOptions} />
            </div>

            <div className="book-title">{props.bookDescription.title}</div>
            {authors}
        </div>
    );

}
export default Book;