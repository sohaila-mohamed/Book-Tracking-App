import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { IShelf } from "../../core/models/shelf";
import Main from "./main";
import { Provider } from "react-redux";
import store from "../../core/store";
import { BrowserRouter } from "react-router-dom";
import * as router from "react-router-dom";

describe("when rendered with shelves array prop", () => {
    let shelves: IShelf[] = [
        {
            title: 'Currently Reading',
            bookList: [{title:"book1",id:"1"}],
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
    it("should main page with my reads title  ", () => {

        const { container } = render( <BrowserRouter><Provider store={store}> <Main shelveList={shelves} /> </Provider></BrowserRouter>);
        expect(
            screen.getByText(/MyReads/)
        ).toBeInTheDocument();
    });
});