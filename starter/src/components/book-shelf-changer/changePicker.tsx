import { IChangeOption } from "../../models/changeOption";

function ChangePicker(props:any){
   const options =props.options.map((opt:IChangeOption,index:number)=>{
    return <option key={index.toLocaleString()} value={opt.value} disabled={opt.disabled}>
    {opt.label}
  </option>
   });
    return (
        <div className="book-shelf-changer">
        <select>
         {options}
        </select>
      </div>
    );

}

export default ChangePicker;