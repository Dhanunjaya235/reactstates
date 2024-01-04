import React, { Component } from 'react';
import './parent.css';

class Parent extends Component{
  constructor(props){
      super(props);
      this.state={
        count:0
      }
  }
  displayCount=()=>{
    console.log( this.state.count)
    this.state.count+=1;
    this.forceUpdate();
  }
  callMe=()=>{
    this.setState(state=>({count:this.state.count+1}))
    window.alert(this.state.count);
    console.log(this.state.count);
  }
  render(){
    return(
      <div className='parent'>

          <button onClick={this.displayCount}>Click Me</button>
          <h1>
            You have clicked the button {this.state.count} times
          </h1>
      </div>
    )
  }
}

Parent.propTypes = {};

Parent.defaultProps = {};

export default Parent;
