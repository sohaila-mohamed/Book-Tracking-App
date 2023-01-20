import { getByTestId, render, screen } from "@testing-library/react";
import  '@testing-library/jest-dom'
import { IShelf } from "../../core/models/shelf";
import Shelf from "./shelf";
import { Provider } from "react-redux";
import store from "../../core/store";


describe("when rendered with shelves array prop", () => {
    it("should render 3 shelves  ", () => {
        let shelf: IShelf=
            {
              title: 'Currently Reading',
              bookList: [{title:"book1",id:"1",authors:["author1"]}],
              id: "currentlyReading"
            }
          ;
    const{container}=  render(<Provider store={store}> <Shelf title={shelf.title} bookList={shelf.bookList} id={shelf.id} /> </Provider> ); 
      expect(
        getByTestId(container,/bookList/).children.length
      ).toEqual(1);
    });
  });