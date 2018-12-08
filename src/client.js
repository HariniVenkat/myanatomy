//prev it was app.js


"use strict"
import { applyMiddleware, createStore } from 'redux';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';


import logger from 'redux-logger';

import thunk from 'redux-thunk';

//import the combined reducers from index.js..
import reducers from './reducers/index';


//import the actions from actions folder..
import { addToCart } from './actions/cartActions'
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import Cart from './components/pages/cart';
import BooksForm from
    './components/pages/booksForm';
import Main from './main';

// STEP 1 create the store

const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList';

import Menu from './components/menu.js';
import Footer from './components/footer.js';


const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute
                    component={BooksList} />
                65<Route path="/admin"
                    component={BooksForm} />
                <Route path="/cart"
                    component={Cart} />
            </Route>
        </Router>
    </Provider>
)


render(
Routes , document.getElementById('app')
);



// STEP 2 create and dispatch actions

//creating new dispath functions and calling them here..

// //POST fuction
// store.dispatch(postBooks([{
//     id: 1,
//     title: 'this is the book title',
//     description: 'this is the book   description',
//     price: 33.33
// },
// {
//     id: 2,
//     title: 'this is the book title',
//     description: 'this is the book 2  description',
//     price: 33.33
// }]))

//DELETE function
//store.dispatch(deleteBooks({id: 2}))





//update operation...

// store.dispatch(updateBooks({
//     id: 1,
//     title: 'new updated title'
// }))



//cart actions start....

//add to cart function

//store.dispatch(addToCart([{ id: 1 }]))

