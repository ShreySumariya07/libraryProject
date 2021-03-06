import React, { useState ,useContext,useEffect} from 'react';
import { Container, Row, Collapse } from 'react-bootstrap';
import AddBook from './AddBook';
import BookCard from './BookCard';
import { BookContext } from './bookContext';
import CarouselPage from './Carousel';
import Details from './DetailModal';
import EditBook from './EditBook';
import { LoginContext } from './loginContext';
import Navbars from './Navbar';
const HomePage = () => {
    const [tag, setTag] = useState("show more");
    const [open, setOpen] = useState(false);
    const[openModal,setModal]=useState(false);
    const[openDetailModal,setOpenDetailModal]=useState(false);
    const[openEditModal,setOpenEditModal]=useState(false);
    const[title,setTitle]=useState("");
    const[id,setId]=useState("");
    const[description,setDescription]=useState("");
    const[author,setAuthor]=useState("");
    const[genre,setGenre]=useState("");
    const[publication,setPublication]=useState("");
    const[pdf,setPdf]=useState("");
    const [img,setImg]=useState("");
    const {token} = useContext(LoginContext); 
    const {books,setBooks} = useContext(BookContext);
    const bookFetch = async () => {
        let tok;
        if(token){
            tok="Token "+token;
        }
        else{
        tok="Token "+ localStorage.getItem('token');
        }
        fetch("https://shrey-library-api.herokuapp.com/api/bookListAdd/",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                'Accept': 'application/json',
                'Authorization':tok,
            }})
            .then(results=>results.json())
            .then(book=>{
                setBooks(book);
            })
    }    
    useEffect(() => {
        bookFetch();
    });
    const Modal =  (id) => {
        const bookData = books.filter((value) => value.book_id === id )
        const book = bookData[0];
        setTitle(book.title);
        setId(book.book_id);
        setImg(book.image);
        setPdf(book.pdf);
        setPublication(book.publication);
        setGenre(book.genre);
        setAuthor(book.author);
        setDescription(book.description);
        if(localStorage.getItem("accountType") ==='1'){
            setOpenEditModal(true);
        }
        else{
        setOpenDetailModal(true);}
    }
    function hideModals(){
        if(localStorage.getItem("accountType") ==='1'){
            setOpenEditModal(false);
        }
        else{
        setOpenDetailModal(false);}
    }
    function openAddModal(){
        setModal(true);
    }
    function hideModal(){
        setModal(false);

    }
    function showMore() {
        if (open) {
            setTag("Show More");
            setOpen(false);
        }
        else {
            setTag("Show Less");
            setOpen(true);
        }
    }
    
    return (
        <div>
        {
        localStorage.getItem("token") ?
        <Container fluid={true} style={{ padding: "0px", backgroundColor: "#ffc75f" }}>
           <AddBook show={openModal} hideModal={hideModal} />
           <EditBook key={title} show={openEditModal} hideModal={hideModals} token={token} title={title} img={img} pdf={pdf} description={description} author={author} publication={publication} id={id} genre={genre}  />
           <Details show={openDetailModal} hideModal={hideModals} title={title} img={img} pdf={pdf} description={description} author={author} publication={publication} id={id} genre={genre} />
            <Navbars  openAddModal={openAddModal} />
            <CarouselPage/>
            <center>
            <h2 style={{marginTop:'2%',color:'white'}}>Books </h2>
            <hr style={{backgroundColor:'white',width:'20%',height:'2px'}}></hr>
            </center>
           
            <Row>
                {
                    books.slice(0,books.length/2+1).map((value) => {
                        return (<BookCard key={value.title} img={value.image} title={value.title} id={value.book_id} pdf={value.pdf} publication={value.publication} genre={value.genre} author={value.author} description={value.description} Modal={(id)=>{Modal(id);}} />);
                    }

                    )
                }
            </Row>
            <Collapse in={open}>
                <Row>

                    {
                        books.slice((books.length/2)+1,books.length+1).map((value) => {
                            return (<BookCard key={value.title} img={value.image} title={value.title} id={value.book_id} pdf={value.pdf} publication={value.publication} genre={value.genre} author={value.author} description={value.description} Modal={(id)=>{Modal(id);}} />);
                        }

                        )
                    }
                </Row>
            </Collapse>
            <label style={{ cursor: "pointer", marginLeft: "5%",color:'#fff',fontWeight:'bold',fontSize:'20px' }} onClick={showMore}>{tag}</label>
        </Container>:<center><h3 style={{marginTop:"20%"}}>Please Login Again!! or put / in url</h3></center>}
        </div>
    );

}
export default HomePage;