import { getAllBooks, searchForBook } from "./bookService";
import * as bookApi from '../../../core/services/apiService/BooksAPI';
describe("test getAllBooks", () => {
    describe("success api call", () => {
        describe("given empty shelves to assign the books to and setSelevesState as action", () => {
            it("it should set shelves with empty array", () => {
                //preparation
                const action = { setShelves: jest.fn };
                const getAllSpy = jest.spyOn(bookApi, 'getAll').mockResolvedValue([]);
                const actionSpy = jest.spyOn(action, 'setShelves');
                //action
                getAllBooks([], action.setShelves).then(() => {
                    //assertion
                    expect(getAllSpy).toHaveBeenCalledTimes(1);
                    expect(actionSpy).toHaveBeenCalledWith([]);
                });
            })

        });
        describe("given shelves without any action to call", () => {

            it("it shouldn't set shelves (not calling any action)", () => {
                //preparation
                const shelves = [{ title: "read", bookList: [] }];
                const getAllSpy = jest.spyOn(bookApi, 'getAll').mockResolvedValue([]);
                //action
                getAllBooks(shelves).then(() => {
                    //assertion
                    expect(getAllSpy).toHaveBeenCalledTimes(1);
                });
            })


        });

    })

    describe("failure api call", () => {
        describe("given shelves and action to setSeleves", () => {

            it("it should set sheleves with empty array", () => {
                //preparation
                const shelves = [{ title: "read", bookList: [] }];
                const action = { setShelves: jest.fn };
                const actionSpy = jest.spyOn(action, 'setShelves');
                const getAllSpy = jest.spyOn(bookApi, 'getAll').mockRejectedValue("error");
                //action
                getAllBooks(shelves, action.setShelves).then(() => {
                    //assertion
                    expect(getAllSpy).toHaveBeenCalledTimes(1);
                    expect(actionSpy).toHaveBeenCalledWith([]);
                });
            })


        });

        describe("given shelves without action to set", () => {

            it("it should set sheleves with empty array", () => {
                //preparation
                const shelves = [{ title: "read", bookList: [] }];
                const getAllSpy = jest.spyOn(bookApi, 'getAll').mockRejectedValue("error");
                //action
                getAllBooks(shelves).then(() => {
                    //assertion
                    expect(getAllSpy).toHaveBeenCalledTimes(1);
                });
            })

        });

    })


});

describe("test searchForBook", () => {
    describe("success api call", () => {

        describe("given query and action to set results", () => {
            it("should call action and set the returned books", () => {
                const books = [{ title: 'book1', authors: ["author1,author2"], thumbnail: "img1" }];
                const action = { setBooks: jest.fn };
                const searchSpy = jest.spyOn(bookApi, 'search').mockResolvedValue(books);
                const actionSpy = jest.spyOn(action, 'setBooks');
                //action
                searchForBook("king", action.setBooks).then(() => {
                    //assertion
                    expect(searchSpy).toHaveBeenCalledWith("king", 12);
                    expect(actionSpy).toHaveBeenCalledWith(books);

                })


            })

        })
        describe("given empty query and action to set results", () => {
            it("should call action and set the empty array []", () => {
                const books = [{ title: 'book1', authors: ["author1,author2"], thumbnail: "img1" }];
                const action = { setBooks: jest.fn };
                const searchSpy = jest.spyOn(bookApi, 'search').mockResolvedValue(books);
                const actionSpy = jest.spyOn(action, 'setBooks');
                //action
                searchForBook("", action.setBooks).then(() => {
                    //assertion
                    expect(searchSpy).not.toHaveBeenCalled();
                    expect(actionSpy).toHaveBeenCalledWith([]);

                })


            })

        })
        describe("given query and no action to set results", () => {
            it("shouldn't call action", () => {
                const books = [{ title: 'book1', authors: ["author1,author2"], thumbnail: "img1" }];
                const searchSpy = jest.spyOn(bookApi, 'search').mockResolvedValue(books);
                //action
                searchForBook("king").then(() => {
                    //assertion
                    expect(searchSpy).toHaveBeenCalledWith("king", 12);

                })


            })

        })
        describe("given empty query and no action to set results", () => {
            it("shouldn't call action", () => {
                const books = [{ title: 'book1', authors: ["author1,author2"], thumbnail: "img1" }];
                const searchSpy = jest.spyOn(bookApi, 'search').mockResolvedValue(books);
                //action
                searchForBook("").then(() => {
                    //assertion
                    expect(searchSpy).not.toHaveBeenCalled();

                })


            })

        })

    });


    describe(" failure api call", () => {

        describe("given query and action to set results", () => {
            it("should call action and set the books with empty array", () => {
                const action = { setBooks: jest.fn };
                const searchSpy = jest.spyOn(bookApi, 'search').mockRejectedValue("error");
                const actionSpy = jest.spyOn(action, 'setBooks');
                //action
                searchForBook("king", action.setBooks).then(() => {
                    //assertion
                    expect(searchSpy).toHaveBeenCalledWith("king", 12);
                    expect(actionSpy).toHaveBeenCalledWith([]);

                })


            })

        })
        describe("given query and no action to set results", () => {
            it("shouldn't call action", () => {
                const searchSpy = jest.spyOn(bookApi, 'search').mockRejectedValue("error");
                //action
                searchForBook("king").then(() => {
                    //assertion
                    expect(searchSpy).toHaveBeenCalledWith("king", 12);

                })


            })

        })

    })
})





export default {};