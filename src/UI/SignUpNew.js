import React,{useState,useContext} from 'react';
import {Form,Container,Row,Col,Image} from 'react-bootstrap';
import logo from '../undraw_reading_time_gvg0.svg';
import { LoginContext } from './loginContext';

import {Link} from 'react-router-dom';
import  './signup.css';
import avtar from '../undraw_profile_pic_ic5t.svg';
const SignUpNew = () =>{
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [middleName,setMiddleName]=useState("");
    const[email,setEmail]=useState("");
    const [accountType,setAccountType]=useState(-1);
    const[isInvalidUserName,setIsInvalidUserName]=useState(false);
    const[isInvalidFirstName,setIsInvalidFirstName]=useState(false);
    const[isInvalidLastName,setIsInvalidLastName]=useState(false);
    const[isInvalidMiddleName,setIsInvalidMiddleName]=useState(false);
    const[isInvalidPassword,setIsInvalidPassword]=useState(false);
    const[isInvalidEmail,setIsInvalidEmail]=useState(false);
    const[isInvalidAccount,setIsInvalidAccount]=useState(false);
    const {setUser,setToken} = useContext(LoginContext);

    async function submitForm(){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(userName.length>0&&userName.trim()!==""&&firstName.length>0&&firstName.trim()!==""&&lastName.length>0&&lastName.trim()!==""&&middleName.length>0&&middleName.trim()!==""&&password.length>=6&&mailformat.test(email) === true){
         const data={
                username:userName,
                first_name:firstName,
                middle_name:middleName,
                last_name:lastName,
                password:password,
                email:email,
                account_type:accountType,
            }
            try{
                const response = await fetch("https://shrey-library-api.herokuapp.com/api/register/", {
                method: "POST",
                body : JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    },
                })
                const res = await response.json()
                 if (res.success){
                    alert("Register Successful. Redirecting to Login Page."); 
                    let user1 = res.User;
                    setUser(user1);
                    let tok = res.token;
                    setToken(tok);
                    localStorage.setItem("UserName",res.User.username);
                    localStorage.setItem("accountType",res.User.account_type);
                    localStorage.setItem("token",res.token);
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
            if(firstName.length<=0||firstName===" "){
                setIsInvalidFirstName(true);
            }
            if(lastName.length<=0||lastName===" "){
                setIsInvalidLastName(true);
            }
            if(middleName.length<=0||middleName===" "){
                setIsInvalidMiddleName(true);
            }
            if(userName.length<=0||userName===" "){
                setIsInvalidUserName(true);
            }
            if(password.length<6||password===" "){
                setIsInvalidPassword(true);
            }
            if(mailformat.test(email) === false){
                setIsInvalidEmail(true);
            }
            if(accountType===-1){
                setIsInvalidAccount(true);
            }
        }    
    }
    function validateWhileFocus(event){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       switch(event.target.name){
           case "userName":
               if(event.target.value.length>0&&event.target.value!==" "){
                  setIsInvalidUserName(false);
               }
               else{
                setIsInvalidUserName(true);
                
               }
               break;
             case "password":
                if(event.target.value.length>=6&&event.target.value!==" "){
                  setIsInvalidPassword(false);
                }
                else{
                   setIsInvalidPassword(true);
                }
               break;
               case "firstName":
                if(event.target.value.length>0&&event.target.value!==" "){
                 setIsInvalidFirstName(false);
                }
                else{
                    setIsInvalidFirstName(true);
                }
               break;
               case "lastName":
                if(event.target.value.length>0&&event.target.value!==" "){
                    setIsInvalidLastName(false);
                }
                else{
                    setIsInvalidLastName(true);
                }
               break;
               case "middleName":
                if(event.target.value.length>0&&event.target.value!==" "){
                    setIsInvalidMiddleName(false);
                }
                else{
                    setIsInvalidMiddleName(true);
                }
               break;
               case "email":
                if (mailformat.test(event.target.value) === true) {
                  setIsInvalidEmail(false);
                }
                else {
                  setIsInvalidEmail(true);
                }
                break;
                default:
                    console.log('Error');
                    break;
            }
       }
        return(
        <div>
        <Container>
            <Row md={2} xs={1} style={{backgroundColor:'white',border:'0rem solid transparent',borderRadius:'2rem'}}>
                <Col style={{backgroundColor:'orange',border:'solid transparent',borderRadius:'2rem',padding:'2rem'}}>
                    <div style={{display:'flex',justifyContent:'center',margin:'auto auto 1rem auto'}}>
                        <Image src={`${avtar}`} style={{height:'25%',width:'25%'}} />
                    </div>
                    <Form>
                        <div style={{display:'flex',justifyContent:'center',margin:'0% 5%',fontSize:'200%',color:'black',fontFamily:'sans-serif'}}>
                            Sign Up
                        </div>
                        <div className="underline"></div>
                        <Form.Row>
                            <Col>
                                <Form.Label style={{display:'flex',justifyContent:'center',fontSize:'100%'}}>Username</Form.Label>
                                <Form.Control name="userName" type="text" placeholder="Enter username" style={{borderRadius:'3rem'}}  onChange={(event)=>{setUserName(event.target.value); validateWhileFocus(event)}} value={userName} isInvalid={isInvalidUserName}/>
                                {isInvalidUserName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                            </Col>
                            <Col>
                                <Form.Label style={{display:'flex',justifyContent:'center',fontSize:'100%'}}>First Name</Form.Label>
                                <Form.Control name="firstName" type="text" placeholder="Enter first name" style={{borderRadius:'3rem'}} onChange={(event)=>{setFirstName(event.target.value); validateWhileFocus(event)}} value={firstName} isInvalid={isInvalidFirstName}/>
                                {isInvalidFirstName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label style={{display:'flex',justifyContent:'center',fontSize:'100%'}}>M Name</Form.Label>
                                <Form.Control name="middleName" type="text" placeholder="Enter middle name" style={{borderRadius:'3rem'}} onChange={(event)=>{setMiddleName(event.target.value); validateWhileFocus(event)}} value={middleName} isInvalid={isInvalidMiddleName}/>
                                {isInvalidMiddleName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                            </Col>
                            <Col>
                                <Form.Label style={{display:'flex',justifyContent:'center',fontSize:'100%'}}>Last Name</Form.Label>
                                <Form.Control name="lastName" type="text" placeholder="Enter last name" style={{borderRadius:'3rem'}} onChange={(event)=>{setLastName(event.target.value); validateWhileFocus(event)}} value={lastName} isInvalid={isInvalidLastName} />
                                 {isInvalidLastName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label style={{display:'flex',justifyContent:'center',fontSize:'100%'}}>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" style={{borderRadius:'3rem'}} onChange={(event)=>{setEmail(event.target.value);validateWhileFocus(event)}} value={email} isInvalid={isInvalidEmail} />
                                {isInvalidEmail?<label style={{color:"red"}}>Invalid Email</label>:null}
                            </Col>
                            <Col>
                                <Form.Label style={{display:'flex',justifyContent:'center',fontSize:'100%'}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" style={{borderRadius:'3rem'}} onChange={(event)=>{setPassword(event.target.value); validateWhileFocus(event)}} value={password} isInvalid={isInvalidPassword} />
                                 {isInvalidPassword?<label style={{color:"red"}}>Password too small</label>:null}
                            </Col>
                        </Form.Row>
                        <Form.Row style={{display:'flex',justifyContent:'center'}}>
                            <Form.Check type="radio" id="1" name="account" label="Teacher" style={{margin:'2%'}} onClick={()=>{setAccountType(1);}}/>
                            
                            <Form.Check type="radio" id="2" name="account" label="Student" style={{margin:'2%'}} onClick={()=>{setAccountType(2);}}/>
                            {isInvalidAccount?<label style={{color:"red" ,position:'relative'}}>Select one of them</label>:null} 
                        </Form.Row>
                        
                    </Form>
                    <div style={{display:'flex',justifyContent:'center',marginTop:'2rem'}}>
                        <Link to="/">
                            <button className='button' onClick={submitForm}>Submit</button>
                        </Link>
                        <Link to="/">
                            <button className='button'>Signin</button>
                        </Link>
                    </div>
                </Col>
                <Col style={{backgroundColor:'azure',border:'solid transparent',borderRadius:'2rem'}}>
                    <Image src={`${logo}`} style={{height:'100%',width:'100%'}} />
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default SignUpNew