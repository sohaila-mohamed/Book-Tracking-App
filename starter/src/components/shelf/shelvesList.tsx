import { IShelf } from "../../models/shelf";
import Shelf from "./shelf";

function ShelvesList(props:any){
    const shelves= props.shelves.map((shelf:IShelf,index:number)=>{
      return  <Shelf config={shelf} key={index.toLocaleString()} />
    });
    return(
        <div className="list-books-content">
          <div>
            {shelves}
          </div>
          </div>

    );
}
export default ShelvesList;