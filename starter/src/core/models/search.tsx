import { HTMLAttributes } from "react";

export interface ISearch extends HTMLAttributes<HTMLElement> {
    close?:{
        action:any,
        value:any;
    },
    open?:{
        action:any,
        value:any;
    },
    placeHolder:string;
}