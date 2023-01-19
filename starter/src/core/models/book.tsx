import { HTMLAttributes } from "react"
import { IChangeOption } from "./changeOption"

export interface IBook extends HTMLAttributes<HTMLElement>{
    book:any,
    shelfChangePicker?:{
        display:boolean,
        options?:IChangeOption[],
        changeAction?:any
    }
}
export interface ICover{
    img:string,
    width:number,
    height:number
}

export interface IThumbnail extends HTMLAttributes<HTMLElement>{
    img:string
}
export interface IAuthor extends HTMLAttributes<HTMLElement>{
    authors:string[];
}