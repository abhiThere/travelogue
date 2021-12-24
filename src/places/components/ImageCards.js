import React from 'react';
import './styleImageCards.css';


let ImageCards = (props) => {
    return(
        <>
        
        
        <div className="card_body">
            <div className="places_card">
            <img src={props.url} alt={props.alt}/>
            <div className="container">
                <h4><b>{props.alt}</b></h4>
                <p>{props.info} </p>
            </div>
        </div>
        </div>
        </>
    );
}

export default ImageCards;