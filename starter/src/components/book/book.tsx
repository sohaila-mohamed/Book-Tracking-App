import ChangePicker from "../book-shelf-changer/changePicker";
import {IChangeOption} from "../../models/changeOption"
//ToDO move change picker configs to shelf component to customize book options   
function Book(props: any) {
    console.log(props);
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
                        width: 128,
                        height: 192,
                        backgroundImage:
                            `url(${props.bookDescription.imageLinks.thumbnail})`,
                    }}
                ></div>
                <ChangePicker options={shelfChangePickerOptions}/>
            </div>
            
            <div className="book-title">{props.bookDescription.title}</div>
            <div className="book-authors">{props.bookDescription.authors[0]}</div>
        </div>
    );

}
export default Book;