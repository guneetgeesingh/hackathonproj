import React, { Component } from 'react';

class Container extends Component{
  constructor(props){
    super(props)

  }
  render(){ return (
    <div className="container"> 
     <Information /> 
     <Logo />
     <Navbar />
   
     </div>)}

}

export default Container;