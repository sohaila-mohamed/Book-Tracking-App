import { Fragment } from "react";
import ShelvesList from "../shelf/shelvesList/shelvesList";
import shelvesList from "../shelf/shelvesList/shelvesList";
import {useNavigate } from "react-router-dom";
function Main({shelvesList,...props}:any){
 const navigate = useNavigate();
 const navigateToSearch=()=>{
    navigate("/search")
 }
return <div className="list-books">
<div className="list-books-title">
  <h1>MyReads</h1>
</div>
<Fragment>
  {shelvesList && < ShelvesList shelves={shelvesList} />}
</Fragment>
<div className="open-search">
  <a data-testid="navigationBtn" onClick={navigateToSearch}>Add a book</a>
</div>
</div>

}

export default Main;