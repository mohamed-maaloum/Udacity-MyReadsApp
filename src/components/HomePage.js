import "../App.css";
import React from "react";
import PropTypes from "prop-types";
import BookShelfManager from "./BookShelfManager";
import { Link } from "react-router-dom";

function HomePage({Books,updateShelf}) {

const BookShelves = [{
    id: 1,
    title: "Currently Reading",
    name:"currentlyReading"
},
{
    id: 2,
    title: "Want To Read",
    name:"wantToRead"
},
{
    id: 3,
    title: "Read",
    name:"read"
    
},

]

return (
    <div className="app">
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div> 
            <BookShelfManager BookShelves={BookShelves} BookData={Books} updateShelf={updateShelf} />
            
            <div className="open-search">
                
            <Link to="/search" className="">
                Add Book
            </Link>
            
            </div>
            
        </div>
        </div>
    
);
}


HomePage.propTypes = {
    Books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
};


export default HomePage;
