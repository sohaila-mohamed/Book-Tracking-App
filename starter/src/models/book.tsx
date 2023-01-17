export interface IBook{
    title:string,
    cover:ICover,
    authors:string[]
}
export interface ICover{
    img:string,
    width:number,
    height:number
}