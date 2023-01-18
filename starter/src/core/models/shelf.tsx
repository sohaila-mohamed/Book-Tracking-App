import { HTMLAttributes } from "react";

export interface IShelf extends HTMLAttributes<HTMLElement>{
    title:string,
    bookList:any []
}
export interface Ishelves extends HTMLAttributes<HTMLElement>{
   shelves:IShelf[];
}