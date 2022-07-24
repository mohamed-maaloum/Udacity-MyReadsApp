import React from "react";
import PropTypes from "prop-types";


function BookItem({bookItem,onChangeShelf}) {


const changeBookSelf = (event) => {
    
    
    const newBook = {...bookItem,shelf:event.target.value};
    onChangeShelf(newBook,bookItem,event.target.value);

};

return (
    <div className="book">
        <div className="book-top">
                            
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
            <div className="book-shelf-changer">
                <select defaultValue={bookItem.shelf} onChange={changeBookSelf} >
                <option value="none" disabled>
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
        </div>
    
);
}

BookItem.propTypes = {
    bookItem: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
};


export default BookItem;
