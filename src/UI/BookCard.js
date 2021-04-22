import React from 'react';
import './card.css';

const BookCard=(props)=>{
    return (
        <div className="Cards" style={{border:" 1px solid white" }}>
            <div className="containers">
                <img src={props.img} alt="hello" />
                <div className="overlay">
                    <a>
                        <h5 className="text" onClick={()=>props.detailModal(props.id)}>{props.title}</h5>
                    </a>
                </div>
            </div>
        </div>

    );
}
export default BookCard;