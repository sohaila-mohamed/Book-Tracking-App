
function AuthorList(props:any){
   return props.authors.map((author:string,index:number)=>{
        return (<div className="book-authors" key={index.toLocaleString()}>{author}</div>)
    });
    
}

export default AuthorList;