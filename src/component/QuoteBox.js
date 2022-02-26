import React from 'react';
import Boton from './Boton';

const QuoteBox = (props) => {

    return (
        <div className='card_container' style={{color:props.color}}>
            <div className='text_container'>
                <p><i class="fa-solid fa-quote-left"></i> {props.sentence} <i class="fa-solid fa-quote-right"></i></p>
            </div>
            <h3><i class="fa-solid fa-user"></i> {props.name} </h3>
            <Boton 
            color={props.color}
            condition={props.condition}
            />
        </div>
    );
};

export default QuoteBox;