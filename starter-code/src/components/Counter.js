import React, { Component } from 'react'


class Counter extends Component {
  constructor(props){
    super(props)
    this.state={
      count : 0,
    }
    console.log('I am in the CONSTRUCTOR of the Counter.js.');
  }

  counter = () =>{
    this.setState((prevState) => {
      return { 
        count: prevState.count + 1 
      };
    })
  }


  componentDidMount() {
    this.timer = setInterval(this.counter, 100);
    console.log('i am in Component DID MOUNT.');
  }
  
  componentDidUpdate(prevProps, prevState) {
      console.log('i am in Component Counter UPDATED from: ', prevState.count);
  }

  componentWillUnmount() {
      console.log("======== Component COUNTER is UNMOUNTED! ========");
      clearInterval(this.timer); // !!!
  }
  


render(){
     console.log("i am in RENDER Counter.js")
  return(
    <h1> { this.state.count }</h1>
  )
}
}

export default Counter;