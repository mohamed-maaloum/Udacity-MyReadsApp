import React from "react";
import PropTypes from "prop-types";


function BookItem({bookItem,onChangeShelf,searchBookShelf}) {


    
    
    const bookShelf = searchBookShelf  ? (  searchBookShelf ):( bookItem.shelf)
    

    const changeBookSelf = (event) => {
    
    
    const newBook = {...bookItem,shelf:event.target.value};
    onChangeShelf(newBook,bookItem,event.target.value);



};

const checkThumbnail = (book)=>{
    let imageExists = book.hasOwnProperty('imageLinks');
    return (imageExists ? true : false );
    
}

const checkAuthors = (book)=>{
    let authorsExists = book.hasOwnProperty('authors');
    return (authorsExists ? true : false );
    
}


return (
    <div className="book">
        
        <div className="book-top">
            {checkThumbnail(bookItem) ? (
            <div
                className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${bookItem.imageLinks.thumbnail})`,
                    }}
                >
            </div>
            ):(
                <div
                className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    
                    }}
                >
            </div>

            )}
            <div className="book-shelf-changer">
                <select defaultValue={bookShelf} onChange={changeBookSelf} >
                <option value="moveTo" disabled>
                    Move to...
                </option>
                <option 
                value="currentlyReading">
                    Currently Reading
                </option>
                <option
                value="wantToRead">Want to Read</option>
                <option
                value="read">Read</option>
                <option
                value="none">None</option>
                </select>
            </div>
            </div>
            <h4>{bookItem.title}</h4>
            {
                checkAuthors(bookItem) ? (
                    <div> 
                        {
                            bookItem.authors.map(author=>{
                                return (
                                    <p key={bookItem.id+author}>{author}</p>
                                )
                            })
                        }
                    </div>
                ):(
                    <p></p>
                )
                
            }
        </div>
    
);
}

BookItem.propTypes = {
    bookItem: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
};


export default BookItem;
