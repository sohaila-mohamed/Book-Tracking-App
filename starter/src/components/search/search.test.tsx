import { act, fireEvent, getByTestId, render, screen } from "@testing-library/react";
import  '@testing-library/jest-dom'
import * as bookService from "../book/bookService/bookService" 
import Search from "./search";
import { Provider } from "react-redux";
import store from "../../core/store";
import * as middlewareApis from "../../core/store/thunkMiddleware/getAlBooks";
describe("when rendered search bar ", () => {
  it("should create input with placeHlder and back button ", () => {
  const closeAction=jest.fn();  
  const {container} =  render(<Provider store={store}>  <Search placeHolder="search" close={{action:closeAction,value:'/main'}} /></Provider>   ); 
    expect(
      screen.getByPlaceholderText(/search/)
    ).toBeInTheDocument();
  expect(
    getByTestId(container,/backBtn/)
  ).toBeInTheDocument();
});
  it("should call search function when search query is typed ", () => {
    const {container} =  render(<Provider store={store}>  <Search placeHolder="search" /></Provider>   ); 
     const searchSpy=jest.spyOn(bookService,'searchForBook');
     const selectElement=getByTestId(container,/searchInput/);
    fireEvent.change(selectElement, {
        target: { value: "king" },
      });
    expect(searchSpy).toHaveBeenCalled();  
});
});
export default{};