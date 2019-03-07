import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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

      </div>
    );
  }
}

export default App;






