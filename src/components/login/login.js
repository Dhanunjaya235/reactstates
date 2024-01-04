import React, { Component } from 'react';
import './login.css';
import Profile from '../profile/profile';
class Login extends Component{
  constructor(){
      super();
      this.state={
        display:false
      }
  }
  toggleUserProfile=()=>{
    this.setState(state=>({display:!state.display}));
  }

  render(){

    return(
      <div>
        <button onClick={this.toggleUserProfile}>Click here to {!this.state.display?"Show Profile":"Hide Profile"}</button>
        {this.state.display? <Profile id={205} name='Dhanunjay'  mobile="9876543210" email="dhanu@gmail.com" ></Profile>:null}
      </div>
    )
  }
}
Login.propTypes = {
};

Login.defaultProps = {};

export default Login;
