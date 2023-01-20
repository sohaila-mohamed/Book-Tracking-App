import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import  '@testing-library/jest-dom' 
import Book from "./book";
import { Provider } from "react-redux";
import store from "../../../core/store";
import * as middlewareApis from "../../../core/store/thunkMiddleware/bookMiddleware";
describe("when rendered book ", () => {
    describe("book given thumbnail",()=>{
        it("should creat book with cover ", () => { 
            const {container} =  render(<Provider store={store}>  <Book book={{title:"book1",id:"1",shelf:"read",imageLinks:{thumbnail:"bookCover"}}}/></Provider>   ); 
            expect(
              getByTestId(container,/bookCover/)
            ).toBeInTheDocument();
          });

    })
    describe("book given no thumbnail",()=>{
        it("should creat book with not Found cover ", () => { 
            const {container} =  render(<Provider store={store}>  <Book book={{title:"book1",id:"1",shelf:"read"}}/></Provider>   ); 
            expect(
              screen.getByText(/Not Found/)
            ).toBeInTheDocument();
          });

    })
    describe("book given authors",()=>{
        it("should creat list of authors ", () => { 
            const {container} =  render(<Provider store={store}>  <Book book={{title:"book1",id:"1",shelf:"read",imageLinks:{thumbnail:"bookCover"},authors:["author1","author2"]}}/></Provider>   ); 
            expect(
                screen.getByText(/author1/)
              ).toBeInTheDocument();
          });

    })
    describe("book given no authors",()=>{
        it("should render Not Found in place of authors ", () => { 
            const {container} =  render(<Provider store={store}>  <Book book={{title:"book1",id:"1",shelf:"read",imageLinks:{thumbnail:"bookCover"}}}/></Provider>   ); 
            expect(
                screen.getByText(/Not Found/)
              ).toBeInTheDocument();
          });

    })

describe("given no changePicker handler function ",()=>{
      it("should call dispatch action of updating the existing books to move from shelf to another ", () => {
        const {container} =  render(<Provider store={store}>  <Book book={{title:"book1",id:"1",shelf:"read",imageLinks:{thumbnail:"bookCover"}}} shelfChangePicker={{display:true}}/></Provider>   ); 
     const updateSpy=jest.spyOn(middlewareApis,'fetchUpdateBookShelf');
     const selectElement=getByTestId(container,/changePicker/);
     fireEvent.change(selectElement, {
         target: { value: "read" },
       }); 

    expect(updateSpy).toHaveBeenCalled();  
});

})


});
export default{};