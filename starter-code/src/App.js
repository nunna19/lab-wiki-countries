import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';  
import Home from './components/Home';
import Education from './components/Education'


class App extends Component {
constructor(props){
  super(props);
  this.state = {isRuning : true}
  console.log(" i am in the constructor")

}
  
stopCounter =() =>{
  this.setState ({...this.state, isRuning : false})

}
 


  render() {
    console.log('I am in RENDER of the App.js.');
    return  this.state.isRuning ?(
      <div className="App">
      
      <h2>Clicking this button will destroy the Counter component and clear the state.</h2>
        <button onClick={this.stopCounter}>Stop the counter</button>
      
    <Counter/>
          <Home/>   
        <Education/>
      </div>
    ): null
  }
}

export default App;
