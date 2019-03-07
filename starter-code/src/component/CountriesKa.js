import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Countries extends Component {
  

  showCountries = ()=>{

    let arrayCountries = this.props.countries.map((eachCountrie,i)=>{

      return (
        <li key={i}>
     
        {eachCountrie.name.common}
        </li>
      )
    })
    return arrayCountries
  }

  render(){

    return(
      <div className="Countries">
           {this.showCountries()}
      </div>
     
    )
  }
}

export default Countries;