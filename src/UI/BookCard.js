import React from 'react';
import './card.css';
const BookCard=(props)=>{
    return (
        <div className="Cards" style={{border:" 1px solid white",padding:'0px' }}>
            <div className="containers">
                <img src={props.img} alt="image4" style={{height:'200px',width:'200px',backgroundColor:'#FFF'}} />
                <div className="overlay">
                  <h5 className="text" style={{cursor:"pointer"}} onClick={()=>{props.Modal(props.id);}}>{props.title}</h5>
                </div>
            </div>
        </div>

    );
}
export default BookCard;