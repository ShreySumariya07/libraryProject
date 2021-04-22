import React, { createContext, useState,useEffect , useContext} from 'react';
import {LoginContext} from './loginContext';
export const BookContext=createContext();
const BookContextProvider=(props)=>{
    const [books,setBooks]=useState([]);
    const {token} =useContext(LoginContext);
    const bookFetch = async () => {
        console.log(token);
        fetch("https://shrey-library-api.herokuapp.com/api/bookListAdd/",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                'Accept': 'application/json',
                // "Authorization": "Token "+`${token}`,
                'Authorization':'Token 264006bf348a28eac12f26fb84585a8fd6abf4b4'
            }})
            .then(results=>results.json())
            .then(book=>{
                setBooks(book);
                console.log(book);
            })
    }    
    useEffect(() => {
        bookFetch();
    },[setBooks])
    //     // const response = await fetch("http://127.0.0.1:8000/api/bookListAdd/",);
    // }; 
    return(
        <BookContext.Provider value={{books,token,setBooks}}>
            {props.children}
        </BookContext.Provider>
    );
 }
export default BookContextProvider;