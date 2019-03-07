import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import countries from './countries.json'
import Countries from './component/CountriesKa.js'
import { Switch, Route } from 'react-router-dom';
// import CountryDetail from './component/CountryDetail';
class App extends Component {
state={
  countries:countries
}



  render() {
     console.log("i get all the contries on RENDER App.js",{countries})
    return (
     
      <div className="App">
         {/* <Switch>
            <Route exact path="/country/:id" component={CountryDetail} />
            <Route 
                 exact path="/country/:id" 
    component={(props) => <CountryDetail {...props} {...this.state}/>}/>
          </Switch> */}
       <Countries {...this.state} /> 

>>>>>>> 3f63972bd306518ba430d5770a7ca1c45504e7cb
      </div>
    ): null
  }
}

export default App;






