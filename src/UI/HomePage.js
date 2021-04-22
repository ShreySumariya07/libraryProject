import React, { useState ,useContext,useEffect} from 'react';
import { Container, Row, Collapse } from 'react-bootstrap';
import AddBook from './AddBook';
import BookCard from './BookCard';
import { BookContext } from './bookContext';
import CarouselPage from './Carousel';
import Details from './DetailModal';
import { LoginContext } from './loginContext';
import Navbars from './Navbar';


const HomePage = ({props}) => {
    const [tag, setTag] = useState("show more");
    const [open, setOpen] = useState(false);
    const[openModal,setModal]=useState(false);
    const[openDetailModal,setOpenDetailModal]=useState(false);
    const[title,setTitle]=useState("");
    const[id,setId]=useState("");
    const[description,setDescription]=useState("");
    const[author,setAuthor]=useState("");
    const[genre,setGenre]=useState("");
    const[publication,setPublication]=useState("");
    const[pdf,setPdf]=useState("");
    const [img,setImg]=useState("");
    const {token} = useContext(LoginContext);
    // console.log(user);
    // console.log(token); 
    const {books,setBooks} = useContext(BookContext);
    // const bookFetch = async () => {
    //     console.log(token);
    //     fetch("https://shrey-library-api.herokuapp.com/api/bookListAdd/",{
    //         method:"GET",
    //         headers:{
    //             "Content-Type": "application/json",
    //             'Accept': 'application/json',
    //             'Authorization':'Token 264006bf348a28eac12f26fb84585a8fd6abf4b4'
    //         }})
    //         .then((results)=>results.json())
    //         .then((book)=>{
    //             setBooks(book);
    //             console.log(book);
    //         },)
    // }; 
    const DetailModal = async (id) => {
        const bookData = books.filter((value) => value.book_id === id )
        // console.log(bookData)
        const booksA = bookData[0]
        console.log(booksA)
        setTitle(booksA.title);
        setId(booksA.book_id);
        setImg(booksA.image);
        setPdf(booksA.pdf)
        setPublication(booksA.publication);
        setGenre(booksA.genre);
        setAuthor(booksA.author);
        setDescription(booksA.description);
        setOpenDetailModal(true);
    }
    function hideModalDetail(){
        // console.log("close modal");
        setOpenDetailModal(false);
    }
    function openAddModal(){
        setModal(true);
        console.log("hello");
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
        <Container fluid={true} style={{ padding: "0px", backgroundColor: " #d9d9d9" }}>
           <AddBook show={openModal} hideModal={hideModal} />
           <Details show={openDetailModal} hideModal={hideModalDetail} title={title} img={img} pdf={pdf} description={description} author={author} publication={publication} id={id} genre={genre} />
            <Navbars accountType={1} openAddModal={openAddModal} />
            <CarouselPage />
            <h2 style={{ marginLeft: "4%" }}>Books</h2>
            <Row>
                {
                    books.map((value) => {
                        // console.log(value);
                        return (<BookCard img={value.image} title={value.title} id={value.book_id} pdf={value.pdf} publication={value.publication} genre={value.genre} author={value.author} description={value.description} detailModal={DetailModal} />);
                    }

                    )
                }
            </Row>
            <Collapse in={open}>
                <Row>

                    {
                        books.map((value) => {
                            // console.log(value);
                            return (<BookCard img={value.image} title={value.title} id={value.book_id} pdf={value.pdf} publication={value.publication} genre={value.genre} author={value.author} description={value.description} detailModal={DetailModal}  />);
                        }

                        )
                    }
                </Row>
            </Collapse>
            <h4 style={{ cursor: "pointer", marginLeft: "10%" }} onClick={showMore}>{tag}</h4>
        </Container>
    );

}
export default HomePage;