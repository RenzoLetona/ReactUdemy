import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv= styled.div`
    width: 40%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
`;

const person = (props) =>{
    return (
        //<div className="Person">
        <StyledDiv>
            <p onClick={props.click}>Soy {props.name} y tengo {props.age} años!!! {props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </StyledDiv>
        //</div>
    )
};

export default person;