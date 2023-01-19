import { HTMLAttributes } from "react";

export interface IShelf extends HTMLAttributes<HTMLElement>{
    title:string,
    bookList:any [],
    id:string
}
export interface Ishelves extends HTMLAttributes<HTMLElement>{
   shelves:IShelf[];
}