import { HTMLAttributes } from "react";

export interface IChangeOption{
    value:string | number,
    label:string,
    disabled?:boolean,
}

export interface IChangePicker extends HTMLAttributes<HTMLElement> {
    options: IChangeOption[];
    changeAction?:any,
    value:any
}