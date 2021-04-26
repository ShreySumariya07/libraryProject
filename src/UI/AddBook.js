import React, { useState,useContext } from "react";
import {
    Button,
    Modal,
    Form,
    ModalBody,
    Container,
    ModalFooter,
} from 'react-bootstrap';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { LoginContext } from './loginContext';
const AddBook = (props) => {
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[author,setAuthor]=useState("");
    const[genre,setGenre]=useState("");
    const[publication,setPublication]=useState("");
    const[pdf,setPdf]=useState("");
    const [img,setImg]=useState("");
    const[isInvalidTitle,setIsInvalidTitle]=useState(false);
    const[isInvalidGenre,setIsInvalidGenre]=useState(false);
    const[isInvalidAuthor,setIsInvalidAuthor]=useState(false);
    const[isInvalidPublication,setIsInvalidPublication]=useState(false);
    const[isInvalidDescription,setIsInvalidDescription]=useState(false);
    const[isInvalidImg,setIsInvalidImg]=useState(false);
    const[isInvalidPdf,setIsInvalidPdf]=useState(false);
    const {token} = useContext(LoginContext);
    async function validate(){
        if(title.trim()!==""&&title.length>0&&author.trim()!==""&&author.length>0&&publication.trim()!==""&&publication.length>0&&genre.trim()!==""&&genre.length>0&&pdf.trim()!==""&&pdf.length>0&&img.trim()!==""&&img.length>0&&description.trim()!==""&&description.length>0){
            let data = {
                title:title,
                author:author,
                publication:publication,
                description:description,
                genre:genre,
                image:img,
                pdf:pdf,
            }
            let tokens;
            if(token){
                 tokens="Token "+token;
            }else{
                 tokens="Token "+localStorage.getItem('token');
            }
            const response = await fetch("https://shrey-library-api.herokuapp.com/api/bookListAdd/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'Authorization':tokens,
                },
                })
                const res = await response.json()
                if (res.success) {
                    alert("Done");
                }
                else {
                    alert("Not Done")
                }
        }
        else{
            if(title.trim()===""&&title.length<=0){
                setIsInvalidTitle(true);
            }
            if(author.trim()===""&&author.length<=0){
                setIsInvalidAuthor(true);
            }
            if(publication.trim()===""&&publication.length<=0){
                setIsInvalidPublication(true);
            }
            if(genre.trim()===""&&genre.length<=0){
                setIsInvalidGenre(true);   
            }
            if(description.trim()===""&&description.length<=0){
                setIsInvalidDescription(true);
            }
            if(pdf.trim()===""&&pdf.length<=0){
                setIsInvalidPdf(true);   
            }
            if(img.trim()===""&&img.length<=0){
                setIsInvalidImg(true);
            }
        }

    }
    return (
        <Modal show={props.show} size="md"  onHide={props.hideModal}>
        <ModalHeader closeButton={true}>
            Add BOOK
        </ModalHeader>
            <ModalBody>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control  type="text" placeholder="Title" onChange={(event)=>{setTitle(event.target.value);}}value={title} isInvalid={isInvalidTitle}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control  type="text" placeholder="Description"  onChange={(event)=>{setDescription(event.target.value);}}value={description} isInvalid={isInvalidDescription}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control   type="text" placeholder="Author"  onChange={(event)=>{setAuthor(event.target.value);}}value={author} isInvalid={isInvalidAuthor}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Genre</Form.Label>
                        <Form.Control  type="text" placeholder="Genre"  onChange={(event)=>{setGenre(event.target.value);}}value={genre} isInvalid={isInvalidGenre}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Publication</Form.Label>
                        <Form.Control  type="text" placeholder="Publication"  onChange={(event)=>{setPublication(event.target.value);}}value={publication} isInvalid={isInvalidPublication}/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control  type="text" placeholder="Image Link"  onChange={(event)=>{setImg(event.target.value);}}value={img} isInvalid={isInvalidImg}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>PDF LINK</Form.Label>
                        <Form.Control   type="text"placeholder="PDF LINK"  onChange={(event)=>{setPdf(event.target.value);}}value={pdf} isInvalid={isInvalidPdf}></Form.Control>
                    </Form.Group>
                </Form>
                </Container>
                <Button style={{marginLeft:"2%"}} onClick={validate} > Add Book</Button>
            </ModalBody>
            <ModalFooter/>
        </Modal>

    );
}
export default AddBook;