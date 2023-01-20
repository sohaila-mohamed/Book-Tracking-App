import { getByTestId, render, screen } from "@testing-library/react";
import  '@testing-library/jest-dom'
import { IShelf } from "../../../core/models/shelf";
import ShelvesList from "./shelvesList";


describe("when rendered with shelves array prop", () => {
    it("should render 3 shelves  ", () => {
        let shelves: IShelf[]=[
            {
              title: 'Currently Reading',
              bookList: [],
              id: "currentlyReading"
            },
            {
              title: 'Want to Read',
              bookList: [],
              id: "wantToRead"
            },
            {
              title: 'Read',
              bookList: [],
              id: "read"
            }
          ];
    const{container}=  render(<ShelvesList shelves={shelves} />); 
      expect(
        getByTestId(container,/sheleves/).children.length
      ).toEqual(3);
    });
  });