import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import  '@testing-library/jest-dom'
import ChangePicker  from "./changePicker";
import { defaultChangePickerOptions } from "../../core/defines/bookDefines";

describe("when rendered with a 5 options prop", () => {
  it("should create dropdown with 5 options to pick from ", () => {
  const{container}=  render(<ChangePicker options={defaultChangePickerOptions} value={{title:'booK1',shelf:"read",id:"1"}} />); 
    expect(
      getByTestId(container,/changePicker/).childElementCount
    ).toEqual(5);
  });
  it("should call changeAction when click is fired ", () => {
    const changeAction={action:()=>{console.log("clicked")}};
    const changeActionSpy= jest.spyOn(changeAction,'action');
    const{container}=  render(<ChangePicker options={defaultChangePickerOptions} value={{title:'booK1',shelf:"read",id:"1"}} changeAction={changeAction.action} />); 
    const selectElement=getByTestId(container,/changePicker/);
    fireEvent.change(selectElement, {
        target: { value: "read" },
      });
    expect(changeActionSpy).toHaveBeenCalled();  
});
});
export default{};