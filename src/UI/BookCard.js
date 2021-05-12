import React from 'react';
import './card.css';
const BookCard=(props)=>{
    return (
        <div className="Cards" style={{border:" 1px solid white" }}>
            <div className="containers">
                <img src={props.img} alt="Title" />
                <div className="overlay">
                  <h5 className="text" style={{cursor:"pointer"}} onClick={()=>{props.Modal(props.id);}}>{props.title}</h5>
                </div>
            </div>
        </div>

    );
}
export default BookCard;