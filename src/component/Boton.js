import React from 'react';

const Boton = (props) => {
    return (
        <>
            <button onClick={props.condition} style={{background:props.color}}>Next <i class="fa-solid fa-shuffle"></i></button>
        </>
    );
};

export default Boton;