//for combine reducers..
//important  //its combine reducers and not combined reducers...
"use strict"

import{combineReducers} from 'redux';

//import reducers to be combined from other files in the /src/reducer folder

import {booksReducers} from './booksReducers'; 
import {cartReducers} from './cartReducers';

export default combineReducers({
    books: booksReducers,
    cart: cartReducers
})