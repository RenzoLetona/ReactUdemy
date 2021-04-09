import './App.css';
//import React, { Component } from 'react';
import React,{useState} from 'react';
import Person from './Person/Person';
import styled from 'styled-components';





/*                            //usando import React, { Component } from 'react';
class App extends Component {
  state = {
    persons: [
      { name: "Franco", age: 30 },
      { name: "Tomás", age: 26 },
      { name: "Bruno", age: 25 }
    ]
  }

  changeNameHandler=()=>{
    console.log("se clickeo!");
    this.setState({
      persons: [
        { name: "Laura", age: 30 },
        { name: "Tomás", age: 26 },
        { name: "Bruno", age: 55 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hola, soy una app react</h1>
        <button onClick={this.changeNameHandler}>Cambiar Nombre</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Soy experto en React</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>

    );
  }
}*/

//--------------------------------------usando  import React,{useState} from 'react';--------------------------------------
/*const App = props => {

  const [personState,setPersonState] = useState({    
    persons: [
      { name: "Franco", age: 30 },
      { name: "Tomás", age: 26 },
      { name: "Bruno", age: 25 },
    ],
    showPerson:false
  });

  const changeNameHandler=()=>{
    console.log("se clickeo!");
    setPersonState({
      persons: [
        { name: "Laura", age: 30 },
        { name: "Tomás", age: 26 },
        { name: "Bruno", age: 55 },
      ]
    });
  };

  const showPersonHandler=()=>{
    const seMuestra = personState.showPerson
    setPersonState({
      persons : personState.persons,
      showPerson: !seMuestra
    })
  }

  return (
    <div className="App">
      <h1>Hola, soy una app react</h1> 
      <button onClick={showPersonHandler}>Cambiar Nombre</button>
      { personState.showPerson ?
        <div>
          <Person name={personState.persons[0].name} age={personState.persons[0].age}/>       
          <Person name={personState.persons[1].name} age={personState.persons[1].age}> Soy experto en React</Person>
          <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
        </div> : null
      }
      
    </div>
  );
  //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'funciona esto???'))
}*/

//--------------------------------------limpiando codigo--------------------------------------


const App = props => {

  const [personState,setPersonState] = useState({    
    persons: [
      { id:'A', name: "Franco", age: 30 },
      { id:'B', name: "Tomás", age: 26 },
      { id:'C', name: "Bruno", age: 25 },
    ],
    showPerson:false
  });

  const nameChangeHandler=(event,id)=>{
    const personaIndex = personState.persons.findIndex(p=> {return p.id ===id})

    const person = {...personState.persons[personaIndex]}
    person.name= event.target.value
    const personsCopy = [...personState.persons]

    personsCopy[personaIndex]=person

    setPersonState({
      persons: personsCopy, 
      showPerson:personState.showPerson
      
    });
  };

  const showPersonHandler=()=>{
    const seMuestra = personState.showPerson
    setPersonState({
      persons : personState.persons,
      showPerson: !seMuestra
    })
  };

  const deletePersonHandler=(personIndex)=>{
    //const personA = personState.persons;
    const personA= [...personState.persons];
    personA.splice(personIndex,1);
    setPersonState({
      persons:personA,
      showPerson: personState.showPerson
    });
  };

  const StyledButon= styled.button`
    border: ${props=>props.dyn ? '3px solid green;' : '3px solid rgb(240, 16, 8);' } 
    padding: 8px;
    cursor: pointer;
    background-color:${props=>props.dyn ? 'rgb(102, 173, 126);' : 'rgb(214, 82, 29);' }  
    font: inherit;
    border-radius: 25px;
    outline: none; 

    &:hover{
      background-color:${props=>props.dyn ? 'rgb(16, 218, 83);' : 'rgb(248, 66, 20);'}
    }
`;


  const clasedinamica= []
  if(personState.showPerson){
    clasedinamica.shift();
    clasedinamica.push('BotonVerde');
  }
  if(personState.showPerson == false){
    clasedinamica.shift();
    clasedinamica.push('BotonRojo');
  }

  let personas = null;
  if(personState.showPerson){
    personas=(
    <div>
      {personState.persons.map((personX,index)=>{
        return <Person change={(event)=>nameChangeHandler(event,personX.id)} click={()=>deletePersonHandler(index)} name={personX.name} age={personX.age} key={personX.id}/>
      })}
      
    </div>);
  }

  return (
    <div className="App">
      <h1>Hola, soy una app react</h1> 
      {/*<button className={clasedinamica.join(' ')} onClick={showPersonHandler}>mostrar datos</button>*/}
      <StyledButon dyn={personState.showPerson} onClick={showPersonHandler}>mostrar datos</StyledButon>
      {personas}
    </div>
  );
  //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'funciona esto???'))
}


 



export default App;
