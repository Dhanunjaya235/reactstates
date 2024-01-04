import React from 'react';
import PropTypes from 'prop-types';
import './child.css';
import Parent from '../parent/parent';

class Child extends Parent{
  constructor(props){
      super(props)
  }
  render(){
    return(
      <div>
      <button onClick={this.callMe}>CLickme</button>
    </div>
    )
  }
}
Child.propTypes = {};

Child.defaultProps = {};

export default Child;
