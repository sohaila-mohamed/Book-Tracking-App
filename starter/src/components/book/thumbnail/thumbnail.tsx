import { IThumbnail } from "../../../core/models/book";

function Thumbnail({img,...props}:IThumbnail){

    return (
        <div
        data-testid="bookCover"
        className="book-cover"
        style={{
            width: 128,
            height: 192,
            backgroundImage:
                `url(${img})`,
        }}
    ></div>
    )

}
export default Thumbnail;