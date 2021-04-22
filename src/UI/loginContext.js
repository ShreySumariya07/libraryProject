import {createContext, React,useState} from 'react';
export const LoginContext=createContext();
const LoginProvider=(props)=>{
    const [user,setUser]=useState('');
    const [token,setToken]=useState('');
    return (
            <LoginContext.Provider value={{user,token,setUser,setToken}}>
               {props.children}
            </LoginContext.Provider>
        );
}
export default LoginProvider;