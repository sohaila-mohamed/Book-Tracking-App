import { IShelf, Ishelves } from "../../../core/models/shelf";
import Shelf from "../shelf";

function ShelvesList({shelves,...props}:Ishelves){
    const shelvesList= shelves.map((shelf:IShelf,index:number)=>{
      return  <Shelf bookList={shelf.bookList}  title={shelf.title} key={index.toLocaleString()} />
    });
    return(
        <div className="list-books-content">
          <div>
            {shelvesList}
          </div>
          </div>

    );
}
export default ShelvesList;