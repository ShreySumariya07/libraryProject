import React, { useState,useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { LoginContext } from './loginContext';
import { useHistory } from 'react-router';
const LoginForm = () => {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const[isInvalidUserName,setIsInvalidUserName]=useState(false);
    const[isInvalidPassword,setIsInvalidPassword]=useState(false);
    const {setUser,setToken} = useContext(LoginContext);
    const history = useHistory ();
    async function submitForm(){
        if(userName.length>0&&userName.trim()!==""&&password.length>=6){
            const data={
                password:password,
                username:userName,
            }
            try{
                const response = await fetch("https://shrey-library-api.herokuapp.com/api/login/", {
                method: "POST",
                body : JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    },
                })
                const res = await response.json()
                console.log(res)
                 if (res.success){
                    alert("Login Successful. Redirecting to Login Page.");
                    let user1 = res.User;
                    setUser(user1);
                    let tok = res.token;
                    setToken(tok);
                    localStorage.setItem("UserName",res.User.username);
                    localStorage.setItem("accountType",res.User.account_type);
                    localStorage.setItem("token",res.token);
                    history.push("/homepage");
                }
                else {
                    alert("Entered details format is incorrect.")
                }
            }
            catch(err){
                console.log(err)
            }             
        }
    else{
        if(userName.length<=0||userName!==" "){
            setIsInvalidUserName(true);
         }
         if(password.length<6||password!==" "){
            setIsInvalidPassword(true);
         }
    }    
    }
    return (
            <Form style={{ marginLeft:"30%",border: "1px solid white", maxWidth: "40%", height: "25rem ",padding:"5%",paddingTop:"2%" }}>
                <h2>Login</h2>
                <br/>
                <Form.Group>
                    <Form.Label >UserName</Form.Label>
                    <Form.Control type="text" placeholder="UserName" onChange={(event)=>{setUserName(event.target.value);}} value={userName} isInvalid={isInvalidUserName}/>
                    {isInvalidUserName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={(event)=>{setPassword(event.target.value);}} value={password}   isInvalid={isInvalidPassword} />
                    {isInvalidPassword?<label style={{color:"red"}}>Password too small</label>:null}
                </Form.Group>
                    <Button  size={'lg'} style={{ border:"none",marginTop: "5%",width:"100%",background:"#E15168" }} onClick={submitForm}>Submit </Button>
                <Link to="/signup">
                    <Button  size={'lg'} style={{ border:"none",marginTop: "5%",width:"100%",background:"#E15168" }}>SignUp</Button>
                </Link>
            </Form>
        
    );

}
export default LoginForm;