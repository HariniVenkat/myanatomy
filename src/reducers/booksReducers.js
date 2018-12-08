"use strict"

// 1.1  const reducer = function (state =  [], action) {


export function booksReducers(state = {
    books: []


}
    , action) {
    //   const reducer = function (state = { books: [] }, action) {
    switch (action.type) {


        case "GET_BOOKS":
            return { ...state, books: [...action.payload] }
            break;




        case "POST_BOOK":

            //adding a unmutable line...dont use push function since it is mutable..
            // 1.1   let books = state.concat(action.payload);
            let books = state.books.concat(action.payload);
            //return state = action.payload;   // state + action.payload;  -->gives --> current state is:  [object Object][object Object]
            //1.1  return books;
            //return {books};
            //bable precise stage 1 usage....
            return { books: [...state.books, ...action.payload] };

            break;

        case "DELETE_BOOK":

            // Create a copy of the current array of books  //using ... operator
            const currentBookToDelete = [...state.books]
            // Determine at which index in books array is the book to be deleted
            const indexToDelete =
                currentBookToDelete.findIndex(function (book) {

                    return book._id == action.payload;

                })
            //use slice to remove the book at the specified index
            return {
                books: [...currentBookToDelete.slice(0, indexToDelete),
                ...currentBookToDelete.slice(indexToDelete + 1)]
            }
            break;



        case "UPDATE_BOOK":

            // Create a copy of the current array ofbooks
            const currentBookToUpdate = [...state.books]
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(function (book) {
                return book._id === action.payload._id;
            })
            // Create a new book object with the new values and with the same array index of theitem we want to replace. To achieve this we
            //will use ...spread but we could use concat methos too
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate], title: action.payload.title
            }
            // This Log has the purpose to show you    how newBookToUpdate looks like
            console.log("what is it newBookToUpdate", newBookToUpdate);
            //use slice to remove the book at the     specified index, replace with the new object
            //and concatenate witht he rest of items in the     array
            return {
                books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
                ...currentBookToUpdate.slice(indexToUpdate + 1)]
            }
            break;
    }
    return state
}