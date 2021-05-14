import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {
    AiOutlinePlus,
  } from 'react-icons/all';
const Navbars = (props) => {
    return (
        <>
            <Navbar  collapseOnSelect expand="lg" style={{backgroundColor:'#393939' }}>
                <Navbar.Brand style={{color:'#fefffb'}}>LibraryXYZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav style={{marginLeft:"80%"}}>
                { localStorage.getItem("accountType") === '1'  ?<label  onClick={props.openAddModal} style={{fontSize:'15px',color:'#fefffb',marginTop:'12px' ,marginRight:'30px',cursor:'pointer'}} ><AiOutlinePlus /> Add</label>:null}
                </Nav>
                    <Nav style={{background:'#fefffb',marginTop:'0.2%'}} >
                        <NavDropdown title={`Hello ${localStorage.getItem("UserName")}!`} color='#fefffb' style={{fontWeight:"bold",color:'#fefffb'}} id="basic-nav-dropdown" >
                            <NavDropdown.Item>
                                <label onClick={()=>{localStorage.clear();}}><Link to="/">Log Out!</Link></label>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>);
}
export default Navbars;