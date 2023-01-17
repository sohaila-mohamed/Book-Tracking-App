import { IShelf } from "../../models/shelf";
import Shelf from "./shelf";

function ShelfsList(props:any){
    const shelfs= props.shelfs.map((shelf:IShelf,index:number)=>{
      return  <Shelf config={shelf} key={index.toLocaleString()} />
    });
    return(
        <div className="list-books-content">
          <div>
            {shelfs}
          </div>
          </div>

    );
}
export default ShelfsList;