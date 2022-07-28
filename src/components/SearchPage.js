import React from "react";
import "../App.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import * as BooksAPI from "../BooksAPI";



function SearchPage({MainBooks,updateShelf}) {

    const [query, setQuery] = useState("");
    const [searchBooks, setSearchBooks] = useState([]);

    const onSearchBook = (query) =>{
        const getSearchBooks = async () => {
            const res = await BooksAPI.search(query);
            if(res){
                
                res.length ? (setSearchBooks(res)):(setSearchBooks([]))
                }
            };
            const resetSearchBooks = ()=>{
                setSearchBooks([]);
            }

            query !== "" ? (getSearchBooks()):(resetSearchBooks())

            
        
    }
    
    const updateQuery = (query) => {
        setQuery(query);
        onSearchBook(query);  
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
            query !== "" ? (
            searchBooks.map(searchBook=>{
                let searchBookShelf;
                MainBooks.forEach(mainBook => {
                    if(mainBook.id === searchBook.id)
                    {
                        searchBookShelf = mainBook.shelf;
                    }
                    
                });
                
                    
                    !searchBookShelf && (
                        searchBookShelf = 'none'
                    )
                    
                    return(
                            <li key={searchBook.id}>
                                <BookItem  bookItem={searchBook} onChangeShelf={updateShelf} searchBookShelf={searchBookShelf}/>
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
