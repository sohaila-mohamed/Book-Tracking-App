import { IChangeOption, IChangePicker } from "../../core/models/changeOption";

function ChangePicker({options,...props}:IChangePicker){
   const optionList =options.map((opt:IChangeOption,index:number)=>{
    return <option key={index.toLocaleString()} value={opt.value} disabled={opt.disabled}>
    {opt.label}
  </option>
   });
    return (
        <div className="book-shelf-changer">
        <select>
         {optionList}
        </select>
      </div>
    );

}

export default ChangePicker;