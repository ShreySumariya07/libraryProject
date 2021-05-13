import React, {useState,useContext} from 'react';
import {Container,Form,Row,Col,Image} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import { LoginContext } from './loginContext';
import { useHistory } from 'react-router';
import './signup.css';
import logo from '../undraw_Sign_in_re_o58h.svg';
import {Link} from 'react-router-dom';
import SignUp from './SignUpNew';

const SignInForm = () =>{
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[isInvalidUserName,setIsInvalidUserName]=useState(false);
    const[isInvalidPassword,setIsInvalidPassword]=useState(false);
    const{setUser,setToken} = useContext(LoginContext);
    const history = useHistory ();

    function callSignup(){
        <SignUp />
    }


    async function submitForm(){
        if(userName.length>0&&userName.trim()!==""&&password.length>=6){
            console.log(userName)
            console.log(password)
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
    return(
        <Container style={{position:'absolute',marginLeft:'10%',marginRight:'10%',top:'30%'}}>
            <Row md={2} xs={2} style={{backgroundColor:'white',border:'0rem solid transparent',borderRadius:'2rem'}}>
                <Col style={{backgroundColor:'azure',border:'solid transparent',borderRadius:'2rem'}}>
                    <Image src={`${logo}`} style={{height:'100%',width:'100%'}} />
                </Col>
                <Col style={{backgroundColor:'orange',border:'solid transparent',borderRadius:'2rem',padding:'2rem'}}>
                    <Form>
                        <div style={{display:'flex',justifyContent:'center',margin:'0% 5%',fontSize:'160%',color:'black',fontFamily:'sans-serif'}}>
                            Sign In
                        </div>
                        <div className="underline"></div>
                        <Form.Group>
                            <Form.Label style={{display:'flex',justifyContent:'center',fontSize:'120%'}}>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" style={{borderRadius:'3rem'}} onChange={(event)=>{setUserName(event.target.value);}} value={userName} isInvalid={isInvalidUserName}/>
                            {isInvalidUserName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{display:'flex',justifyContent:'center',fontSize:'100%'}}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{borderRadius:'3rem'}} onChange={(event)=>{setPassword(event.target.value);}} value={password}  isInvalid={isInvalidPassword}/>
                            {isInvalidPassword?<label style={{color:"red"}}>Password too small</label>:null}
                        </Form.Group>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'2rem'}}>
                            <button className='button' onClick={submitForm}>Submit</button>
                            <Link to="/signup">
                                <button className='button' onClick={callSignup}>Signup</button>
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
            </Container>
    );
}

export default SignInForm