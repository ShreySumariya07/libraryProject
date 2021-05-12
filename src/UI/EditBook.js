import React, { useState ,useEffect} from "react";
import {
    Button,
    Modal,
    Form,
    ModalBody,
    Container,
    ModalFooter,
    Col,
} from 'react-bootstrap';
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const EditBook = (props) => {

    const[title,setTitle]=useState(props.title);
    const[id,setId]=useState(props.id);
    const[description,setDescription]=useState(props.description);
    const[author,setAuthor]=useState(props.author);
    const[genre,setGenre]=useState(props.genre);
    const[publication,setPublication]=useState(props.publication);
    const[pdf,setPdf]=useState(props.pdf);
    const [img,setImg]=useState(props.img);
    const[isInvalidTitle,setIsInvalidTitle]=useState(false);
    const[isInvalidGenre,setIsInvalidGenre]=useState(false);
    const[isInvalidAuthor,setIsInvalidAuthor]=useState(false);
    const[isInvalidPublication,setIsInvalidPublication]=useState(false);
    const[isInvalidDescription,setIsInvalidDescription]=useState(false);
    const[isInvalidImg,setIsInvalidImg]=useState(false);
    const[isInvalidPdf,setIsInvalidPdf]=useState(false);
    const [tok,setTok]=useState(props.token);
    /*function setValues(){
        setTitle(props.title);
        setId(props.id);
        setDescription(props.description);
        setAuthor(props.author);
        setGenre(props.genre);
        setPublication(props.publication);
        setPdf(props.pdf);
        setImg(props.img);
        setTok(props.token);
    }*/
    useEffect(() => {
        setTitle(props.title);
        setId(props.id);
        setDescription(props.description);
        setAuthor(props.author);
        setGenre(props.genre);
        setPublication(props.publication);
        setPdf(props.pdf);
        setImg(props.img);
        setTok(props.token);
    },[props]);
    async function deleteBook(){
        let tokw;
        if(tok){
            tokw="Token "+tok;
       }else{
            tokw="Token "+localStorage.getItem('token');
       }
        let url='https://shrey-library-api.herokuapp.com/api/bookDetail/'+id+'/'
        const response = await fetch(url, {
            method: "DELETE",
             headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization":tokw,
            },
          
          })
          const res = await response;
          if (res.status===205) {
            alert("Done");
          }
          else {
            alert("ERROR");
          }
          
    }
    async function validate(){
        if(title.trim()!==""&&title.length>0&&author.trim()!==""&&author.length>0&&publication.trim()!==""&&publication.length>0&&genre.trim()!==""&&genre.length>0&&pdf.trim()!==""&&pdf.length>0&&img.trim()!==""&&img.length>0&&description.trim()!==""&&description.length>0){
            const data = {
                title:title,
                author:author,
                genre:genre,
                publication:publication,
                description:description,
                image:img,
                pdf:pdf,
            };
            let tokw;
            if(tok){
                tokw="Token "+tok;
           }else{
                tokw="Token "+localStorage.getItem('token');
           }
            let url='https://shrey-library-api.herokuapp.com/api/bookDetail/'+id+'/'
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization":tokw,
                },
              
              })
              const res = await response;
              if (res) {
                alert("Done");
              }
              else {
                alert("ERROR")
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
            Edit Book
        </ModalHeader>
            <ModalBody>
            <Container>
            <Col>
              <img src={props.img} alt="hello"></img>
            </Col>
              <Col>
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
                </Col>
                </Container>
                <Button style={{ marginLeft: "2.5%", width: "100%",marginBottom:"2%" }} onClick={()=>validate()}> Edit Book</Button>
                <Button style={{ marginLeft: "2.5%", width: "100%",marginBottom:"2%" }} onClick={()=>deleteBook()}> Delete Book</Button>
                <Button style={{ marginLeft: "2%", width: "100%" }} href={props.pdf} target="__blank"> Download</Button>
            </ModalBody>
            <ModalFooter/>
        </Modal>

    );
}
export default EditBook;