import { IChangeOption, IChangePicker } from "../../core/models/changeOption";

function ChangePicker({options,changeAction,value,...props}:IChangePicker){
   const optionList =options.map((opt:IChangeOption,index:number)=>{
    return <option key={index.toLocaleString()} value={opt.value} disabled={opt.disabled || opt.value===value.shelf} >
    {opt.label}
  </option>
   });
   function handleShelfChange($event:any){
      if($event.target.value!=="None"){
         changeAction && changeAction($event.target.value,value);
      }
   }
    return (
        <div className="book-shelf-changer">
        <select onChange={handleShelfChange} defaultValue={"None"} data-testid="changePicker" >
         {optionList}
        </select>
      </div>
    );

}

export default ChangePicker;