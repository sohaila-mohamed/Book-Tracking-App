import { Fragment } from "react";
import { IAuthor } from "../../../core/models/book";

function AuthorList({authors,...props}:IAuthor){
   let authorList= authors.map((author:string,index:number)=>{
        return  (<div className="book-authors" key={index.toLocaleString()}>{author}</div>)
    }) ;

    return <Fragment>{authorList}</Fragment>;
    
}


export default AuthorList;