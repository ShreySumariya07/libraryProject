import React, { createContext, useState} from 'react';
export const BookContext=createContext();
const BookContextProvider=(props)=>{
    const [books,setBooks]=useState([]);
    return(
        <BookContext.Provider value={{books,setBooks}}>
            {props.children}
        </BookContext.Provider>
    );
 }
export default BookContextProvider;