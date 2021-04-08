import './App.css';
//import React, { Component } from 'react';
import React,{useState} from 'react';
import Person from './Person/Person';





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
const App = props => {

  const [personState,setPersonState] = useState({    
    persons: [
      { name: "Franco", age: 30 },
      { name: "Tomás", age: 26 },
      { name: "Bruno", age: 25 }
    ]
  });

  const changeNameHandler=()=>{
    console.log("se clickeo!");
    setPersonState({
      persons: [
        { name: "Laura", age: 30 },
        { name: "Tomás", age: 26 },
        { name: "Bruno", age: 55 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hola, soy una app react</h1> 
      <button onClick={changeNameHandler}>Cambiar Nombre</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>       
      <Person name={personState.persons[1].name} age={personState.persons[1].age}> Soy experto en React</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'funciona esto???'))
}
 



export default App;
