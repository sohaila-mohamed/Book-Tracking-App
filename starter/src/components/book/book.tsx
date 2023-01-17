import ChangePicker from "../book-shelf-changer/changePicker";
import {IChangeOption} from "../../models/changeOption"
function Book(props: any) {
    const shelfChangePickerOptions : IChangeOption[] =  [
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

    ]
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: props.bookDescription.cover.width,
                        height: props.bookDescription.cover.height,
                        backgroundImage:
                            `url(${props.bookDescription.cover.img})`,
                    }}
                ></div>
                <ChangePicker options={shelfChangePickerOptions}/>
            </div>
            
            <div className="book-title">{props.bookDescription.title}</div>
            <div className="book-authors">{props.bookDescription.author}</div>
        </div>
    );

}
export default Book;