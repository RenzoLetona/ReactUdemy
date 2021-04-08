import React from 'react';

const person = (props) =>{
    return (
        <div>
            <p>Soy {props.name} y tengo {props.age} años!!! {props.children}</p>
            
        </div>
    )
};

export default person;