import React from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

function BookShelfManager({BookShelves,BookData,updateShelf}) {

return (
    <div className="list-books-content">
            {
                BookShelves.map((Bookshelf) => {
                    const booksInShelf = BookData.filter((book)=>book.shelf===Bookshelf.name )
                    return(
                        
                        <BookShelf  
                            key={Bookshelf.id} 
                            booksInShelf={booksInShelf} 
                            bookShelfTilte={Bookshelf.title} 
                            BookShelves = {BookShelves}
                            updateShelf ={updateShelf}
                        />
                        
                        
                )
                
                })
                
            }
        </div>
);
}


BookShelfManager.propTypes = {
    BookShelves: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    BookData: PropTypes.array.isRequired,
};

export default BookShelfManager;
