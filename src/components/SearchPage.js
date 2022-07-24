import React from "react";
import "../App.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import * as BooksAPI from "../BooksAPI";



function SearchPage({updateShelf}) {

    const [query, setQuery] = useState("");
    const [searchBooks, setSearchBooks] = useState([]);
    const [showResults,setShowResults] =useState(false);   

    const onSearchBook = (query,maxResults) =>{
        const getSearchBooks = async () => {
            const res = await BooksAPI.search(query,maxResults);
            setSearchBooks(res);
            setShowResults(true);
            };

            getSearchBooks();
        
    }
    
    const checkShowSerchResults=(searchBooksReturned)=>{
        if(Array.isArray(searchBooksReturned))
        {
            setShowResults(true);
        }
        else{
            setShowResults(false);
            setSearchBooks([]);
        }
    }

    const updateQuery = (query) => {
        setQuery(query);
        onSearchBook(query,10);
        checkShowSerchResults(searchBooks);
    };



return (
    <div className="app">
        <div className="search-books">
            <div className="search-books-bar">
            <Link
                className="close-search"
                to={"/"}
            >
                Close
            </Link>
            
            <div className="search-books-input-wrapper">
                <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
            />

            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">{
                
            showResults ? (
                
            searchBooks.map(book=>{
                    return(
                            <li key={book.id}>
                                <BookItem  bookItem={book} onChangeShelf={updateShelf} />
                            </li>
                    )
                })
            ):(
                <li></li>
            )
            }
            </ol>
        </div>
        </div>
    </div>
);
}


SearchPage.propTypes = {
    updateShelf: PropTypes.func.isRequired,
};

export default SearchPage;
