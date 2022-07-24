import React from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem";

function Bookshelf({bookShelfTilte,booksInShelf,updateShelf}) {


return (

        <div key={Bookshelf.id} className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTilte}</h2>
            <div className="bookshelf-books">
                        <ol className="books-grid">
                    
            {
                booksInShelf.map(book=>{
                    return(
                            <li key={book.id}>
                                <BookItem  bookItem={book} onChangeShelf={updateShelf} />
                            </li>
                    )
                })
            }

                </ol>
            </div>   
        </div>
);
}

Bookshelf.propTypes = {
    bookShelfTilte: PropTypes.string.isRequired,
    booksInShelf: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
};


export default Bookshelf;
