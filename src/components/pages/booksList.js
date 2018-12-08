"use strict"

import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';



import {Grid, Col, Row, Button} from 'react-bootstrap';




//create sep page for bookitem which would have the book details..
import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends React.Component {

componentDidMount(){
    //dispatch
    this.props.getBooks();
}



    render() {
        const booksList = this.props.books.map(function (booksArr) {

            //console.log('state correct?? :',this.props.books);

            return (



              <Col xs={12} sm={6} md={4} key={booksArr._id}>
              <BookItem

              _id={booksArr._id}
              title={booksArr.title}
              description={booksArr.description}
              price={booksArr.price}
              />
              </Col>
            )
        })



        return (
            
<Grid>

<Row>
    <Cart/>
</Row>
<Col xs={12} sm={6}>

<BooksForm />
</Col>

    <Row style={{marginTop:'15px'}}>
    {booksList}
    </Row>
</Grid>


        )
    }


}





function mapStateToProps(state) {
    return {
        books: state.books.books
    }

}

function mapDispatchToProps(dispatch) {

    return bindActionCreators(
        { getBooks: getBooks }
        , dispatch)

}


export default connect(mapStateToProps,mapDispatchToProps)(BooksList);