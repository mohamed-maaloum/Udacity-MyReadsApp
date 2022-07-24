import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

function App() {
const [Books, setBooks] = useState([]);

useEffect(() => {
    const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
    };

    getBooks();
}, []);

const updateShelf = (newBook,book,shelf) => {
    
    BooksAPI.update(book,shelf);
    
    const updatedBooks = Books.filter((bookItem)=>
        bookItem.id !==book.id
    ) 

    setBooks(updatedBooks.concat(newBook));

};

return (
    
    
    <Routes>
      <Route
        exact
        path="/"
        element={
          <HomePage Books={Books} updateShelf={updateShelf} />
        }
      />
      
      <Route
        exact
        path="/search"
        element={
          <SearchPage updateShelf={updateShelf}/>
        }
    />
    </Routes>

    
);
}

export default App;
